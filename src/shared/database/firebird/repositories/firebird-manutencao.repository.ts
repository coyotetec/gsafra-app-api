import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { Manutencao } from 'src/modules/manutencao/entities/manutencao.entity';
import { ManutencaoRepository } from 'src/modules/manutencao/manutencao.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdManutencaoMapper } from '../mappers/firebird-manutencao.mapper';
import { CreateManutencaoDto } from 'src/modules/manutencao/dto/create-manutencao.dto';
import { ManutencaoCicloEntity } from 'src/modules/manutencao/entities/manutencao-ciclo.entity';

@Injectable()
export class FirebirdManutencaoRepositoryData
  implements ManutencaoRepository {
  constructor(private firebird: FirebirdService) { }

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    // ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}
    return this.firebird.query<Manutencao>(
      host,
      code,
      `SELECT * FROM MANUTENCAO_M `,
      FirebirdManutencaoMapper.toDomain,
    );
  }
  findById(host: string, code: string, lastUpdatedAt?: Date, id?: number): Promise<Manutencao[]> {
    return null
  }
  async create(
    host: string,
    code: string,
    manutencao: CreateManutencaoDto,
  ) {
    const {
      idFornecedor,
      idPatrimonio,
      tipoManutencao,
      date,
      situacao,
      totalPecas,
      totalGeral,
      totalServico,
      descricao,
      horimetro,
      idPessoa,
    } = manutencao
    const manutencaoResponse = await this.firebird.query(
      host,
      code,
      `INSERT INTO MANUTENCAO_M (ID, ID_PATRIMONIO, ID_FORNECEDOR, ID_PESSOA, TIPO_MANUTENCAO, DATA, SITUACAO, TOTAL_PECAS, TOTAL_GERAL, TOTAL_SERVICO, OBS, HORIMETRO) VALUES (GEN_ID(GEN_MANUTENCAO_M, 1), ${idPatrimonio}, ${idFornecedor}, ${idPessoa}, ${tipoManutencao}, '${format(date, 'yyyy-MM-dd')}', ${situacao}, ${totalPecas}, ${totalGeral}, ${totalServico}, '${descricao}', ${horimetro}) RETURNING ID`,
      FirebirdManutencaoMapper.toCreatedDomain,
    );
    const allData = manutencao as any
    allData?.produtos?.map(async (item) => {
      await this.firebird.query(
        host,
        code,
        `UPDATE ESTOQUE SET ESTOQUE_ATUAL = ESTOQUE_ATUAL - ${item.qtde} WHERE ID = ${item.id}`
      )
      await this.firebird.query(
        host,
        code,
        `INSERT INTO MOVIMENTO_ESTOQUE (
        ID, 
        ID_PRODUTO_ALMOXARIFADO, 
        ID_TIPO_MOVIMENTO_ESTOQUE,
        ID_ALMOXARIFADO, 
        ENTRADA_SAIDA, 
        DATA, 
        QTDE, 
        CUSTO, 
        ESTOQUE_ATUAL,
        ESTOQUE_ANTERIOR,
        TOTAL
      ) VALUES (
       GEN_ID(GEN_MOVIMENTO_ESTOQUE, 1), 
        ${item.idProdutoAlmoxarifado}, 
        1,
        ${item.idAlmoxarifado}, 
        'S', 
        '${format(date, 'yyyy-MM-dd')}',
        ${item.qtde || 0}, 
        ${item.custo || 0}, 
         ${item.estoqueAtual - item.qtde},
        ${item.estoqueAtual || 0},
        ${manutencao.totalGeral}
      ) RETURNING ID;`
      )
    })
     allData?.safras?.map(async (item) => {
      const totalHectares = item.talhoes_safras.reduce((acc, curr) => {
        return acc + curr.hectares
      }, 0)
       await this.firebird.query(
         host,
         code,
         `INSERT INTO MANUTENCAO_M_CICLO (ID, ID_CICLO_PRODUCAO, ID_MANUTENCAO_M, PROPORCAO, QTDE_TALHOES, TOTAL_HECTARES, VALOR) VALUES (GEN_ID(GEN_MANUTENCAO_M_CICLO, 1),
          ${item.id}, ${manutencaoResponse[0].id}, ${0}, ${item.talhoes_safras.length}, ${totalHectares}, ${manutencao.totalGeral}) RETURNING ID`,
         FirebirdManutencaoMapper.toCreatedDomain,
       );

     })
     const { id } = manutencaoResponse[0]
  }
  findBySafraId(host: string, code: string, lastUpdatedAt?: Date, safraId?: number): Promise<Manutencao[]> {
    return this.firebird.query<ManutencaoCicloEntity>(
      host,
      code,
      `SELECT * FROM MANUTENCAO_M_CICLO 
      INNER JOIN MANUTENCAO_M ON MANUTENCAO_M_CICLO.ID_MANUTENCAO_M = MANUTENCAO_M.ID
      WHERE MANUTENCAO_M_CICLO.ID_CICLO_PRODUCAO = ${safraId};
`,
      FirebirdManutencaoMapper.toDomainFrontend,
    );
  }
}

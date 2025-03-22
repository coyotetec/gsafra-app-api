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
    return this.firebird.query(
      host,
      code,
      `INSERT INTO MANUTENCAO_M (ID, ID_PATRIMONIO, ID_FORNECEDOR, ID_PESSOA, TIPO_MANUTENCAO, DATA, SITUACAO, TOTAL_PECAS, TOTAL_GERAL, TOTAL_SERVICO, OBS, HORIMETRO) VALUES (GEN_ID(GEN_MANUTENCAO_M, 1), ${idPatrimonio}, ${idFornecedor}, ${idPessoa}, ${tipoManutencao}, '${format(date, 'yyyy-MM-dd')}', ${situacao}, ${totalPecas}, ${totalGeral}, ${totalServico}, '${descricao}', ${horimetro}) RETURNING ID`,
      FirebirdManutencaoMapper.toCreatedDomain,
    );
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

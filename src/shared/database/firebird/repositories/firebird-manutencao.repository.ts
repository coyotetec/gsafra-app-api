import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { Manutencao } from 'src/modules/manutencao/entities/manutencao.entity';
import { ManutencaoRepository } from 'src/modules/manutencao/manutencao.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdManutencaoMapper } from '../mappers/firebird-manutencao.mapper';
import { CreateManutencaoDto } from 'src/modules/manutencao/dto/create-manutencao.dto';

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
}

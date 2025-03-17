import { Injectable } from '@nestjs/common';
import { CreateManutencaoCicloDto } from 'src/modules/manutencao-ciclo/dto/create-manutencao-ciclo.dto';
import { ManutencaoCiclo } from 'src/modules/manutencao-ciclo/entities/manutencao.entity';
import { ManutencaoCicloRepository } from 'src/modules/manutencao-ciclo/manutencao-ciclo.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdManutencaoCicloMapper } from '../mappers/firebird-manutencao-ciclo.mapper';
import { FirebirdManutencaoMapper } from '../mappers/firebird-manutencao.mapper';

@Injectable()
export class FirebirdManutencaoCicloRepositoryData
  implements ManutencaoCicloRepository {
  constructor(private firebird: FirebirdService) { }

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<ManutencaoCiclo>(
      host,
      code,
      `SELECT * FROM MANUTENCAO_M_CICLO `,
      FirebirdManutencaoCicloMapper.toDomain,
    );
  }
  async createCiclo(
    host: string,
    code: string,
    manutencao: CreateManutencaoCicloDto,
  ) {
    const {
      idCicloProducao, idManutencao, proporcao, qtdeTalhao, totalHectares, valor
    } = manutencao
    return this.firebird.query(
      host,
      code,
      `INSERT INTO MANUTENCAO_M_CICLO (ID, ID_CICLO_PRODUCAO, ID_MANUTENCAO_M, PROPORCAO, QTDE_TALHOES, TOTAL_HECTARES, VALOR) VALUES (GEN_ID(GEN_MANUTENCAO_M_CICLO, 1), ${idCicloProducao}, ${idManutencao}, ${proporcao}, ${qtdeTalhao}, ${totalHectares}, ${valor}) RETURNING ID`,
      FirebirdManutencaoMapper.toCreatedDomain,
    );
  }
}

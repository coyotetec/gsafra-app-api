import { Injectable } from '@nestjs/common';
import { ManutencaoCiclo } from 'src/modules/manutencao-ciclo/entities/manutencao.entity';
import { ManutencaoCicloRepository } from 'src/modules/manutencao-ciclo/manutencao-ciclo.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdManutencaoCicloMapper } from '../mappers/firebird-manutencao-ciclo.mapper';

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
}

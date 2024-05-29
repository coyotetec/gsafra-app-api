import { Injectable } from '@nestjs/common';
import { CulturasRepository } from 'src/modules/culturas/culturas.repository';
import { Cultura } from 'src/modules/culturas/entities/cultura.entity';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdCulturasMapper } from '../mappers/firebird-culturas.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdCulturasRepository implements CulturasRepository {
  constructor(private readonly firebirdServices: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Cultura[]> {
    return this.firebirdServices.query<Cultura>(
      host,
      code,
      `SELECT * FROM CULTURA ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''} ORDER BY NOME`,
      FirebirdCulturasMapper.toDomain,
    );
  }
}

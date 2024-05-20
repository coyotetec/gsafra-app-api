import { Injectable } from '@nestjs/common';
import { Variedade } from 'src/modules/variedades/entities/variedade.entity';
import { VariedadesRepository } from 'src/modules/variedades/variedades.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdVariedadesMapper } from '../mappers/firebird-variedades.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdVariedadesRepository implements VariedadesRepository {
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Variedade[]> {
    return this.firebirdService.query<Variedade>(
      host,
      code,
      `SELECT * FROM VARIEDADE ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdVariedadesMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { Variedade } from 'src/modules/variedades/entities/variedade.entity';
import { VariedadesRepository } from 'src/modules/variedades/variedades.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdVariedadesMapper } from '../mappers/firebird-variedades.mapper';

@Injectable()
export class FirebirdVariedadesRepository implements VariedadesRepository {
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany({ host, code }: DBConnectionDataType): Promise<Variedade[]> {
    return this.firebirdService.query<Variedade>(
      host,
      code,
      'SELECT * FROM VARIEDADE',
      FirebirdVariedadesMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { CulturasRepository } from 'src/modules/culturas/culturas.repository';
import { Cultura } from 'src/modules/culturas/entities/cultura.entity';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdCulturasMapper } from '../mappers/firebird-culturas.mapper';

@Injectable()
export class FirebirdCulturasRepository implements CulturasRepository {
  constructor(private readonly firebirdServices: FirebirdService) {}

  findMany({ host, code }: DBConnectionDataType): Promise<Cultura[]> {
    return this.firebirdServices.query<Cultura>(
      host,
      code,
      'SELECT * FROM CULTURA',
      FirebirdCulturasMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { Unidade } from 'src/modules/unidades/entities/unidade.entity';
import { UnidadesRepository } from 'src/modules/unidades/unidades.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdUnidadesMapper } from '../mappers/firebird-unidades.mapper';

@Injectable()
export class FirebirdUnidadesRepository implements UnidadesRepository {
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany({ host, code }: DBConnectionDataType): Promise<Unidade[]> {
    return this.firebirdService.query<Unidade>(
      host,
      code,
      'SELECT * FROM UNIDADE',
      FirebirdUnidadesMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { EstadioFenologico } from 'src/modules/estadios-fenologicos/entities/estadios-fenologico.entity';
import { EstadiosFenologicosRepository } from 'src/modules/estadios-fenologicos/estadios-fenologicos.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdEstadiosFenologicosMapper } from '../mappers/firebird-estadios-fenologicos.mapper';

@Injectable()
export class FirebirdEstadiosFenologicosRepository
  implements EstadiosFenologicosRepository
{
  constructor(private readonly firebirdService: FirebirdService) {}

  findAll({ code, host }: DBConnectionDataType): Promise<EstadioFenologico[]> {
    return this.firebirdService.query<EstadioFenologico>(
      host,
      code,
      'SELECT * FROM ESTACAO_FENOLOGICO',
      FirebirdEstadiosFenologicosMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { EstadioFenologico } from 'src/modules/estadios-fenologicos/entities/estadios-fenologico.entity';
import { EstadiosFenologicosRepository } from 'src/modules/estadios-fenologicos/estadios-fenologicos.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdEstadiosFenologicosMapper } from '../mappers/firebird-estadios-fenologicos.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdEstadiosFenologicosRepository
  implements EstadiosFenologicosRepository
{
  constructor(private readonly firebirdService: FirebirdService) {}

  findAll(
    { code, host }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<EstadioFenologico[]> {
    return this.firebirdService.query<EstadioFenologico>(
      host,
      code,
      `SELECT * FROM ESTACAO_FENOLOGICO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdEstadiosFenologicosMapper.toDomain,
    );
  }
}

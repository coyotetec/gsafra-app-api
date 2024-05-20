import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { EstadioFenologico } from './entities/estadios-fenologico.entity';

export abstract class EstadiosFenologicosRepository {
  abstract findAll(
    { code, host }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<EstadioFenologico[]>;
}

import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Variedade } from './entities/variedade.entity';

export abstract class VariedadesRepository {
  abstract findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Variedade[]>;
}

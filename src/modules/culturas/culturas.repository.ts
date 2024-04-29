import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Cultura } from './entities/cultura.entity';

export abstract class CulturasRepository {
  abstract findMany({ host, code }: DBConnectionDataType): Promise<Cultura[]>;
}

import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Safra } from './entities/safra.entity';

export abstract class SafrasRepository {
  abstract findMany({ host, code }: DBConnectionDataType): Promise<Safra[]>;
}

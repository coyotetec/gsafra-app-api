import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TalhaoSafra } from './entities/talhao-safra.entity';

export abstract class TalhoesSafrasRepository {
  abstract findMany({
    code,
    host,
  }: DBConnectionDataType): Promise<TalhaoSafra[]>;
}

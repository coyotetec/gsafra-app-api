import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Talhao } from './entities/talhao.entity';

export abstract class TalhoesRepository {
  abstract findMany({ host, code }: DBConnectionDataType): Promise<Talhao[]>;
}

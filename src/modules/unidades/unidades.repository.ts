import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Unidade } from './entities/unidade.entity';

export abstract class UnidadesRepository {
  abstract findMany({ host, code }: DBConnectionDataType): Promise<Unidade[]>;
}

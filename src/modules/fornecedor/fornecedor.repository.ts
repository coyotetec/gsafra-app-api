import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Fornecedor } from './entities/fornecedor.entity';

export abstract class FornecedorRepository {
  abstract findMany(
    { code, host }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Fornecedor[]>;
}

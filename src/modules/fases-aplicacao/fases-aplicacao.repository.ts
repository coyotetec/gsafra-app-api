import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FaseAplicacao } from './entities/fase-aplicacao.entity';

export abstract class FasesAplicacaoRepository {
  abstract findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<FaseAplicacao[]>;
}

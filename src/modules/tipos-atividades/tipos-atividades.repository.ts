import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TipoAtividade } from './entities/tipos-atividade.entity';

export abstract class TiposAtividadesRepository {
  abstract findMany(
    { code, host }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<TipoAtividade[]>;
}

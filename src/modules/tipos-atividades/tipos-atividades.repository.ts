import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TipoManutencao } from '../tipos-manutencao/entities/tipos-manutencao.entity';

export abstract class TiposAtividadesRepository {
  abstract findMany(
    { code, host }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<TipoManutencao[]>;
}

import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TipoManutencao } from './entities/tipos-manutencao.entity';

export abstract class TiposManutencaoRepository {
  abstract findMany(
    { code, host }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<TipoManutencao[]>;
}

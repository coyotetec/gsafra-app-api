import { Abastecimento } from './entities/abastecimento.entity';
import { CreatedAbastecimento } from './entities/created-abastecimento.entity';

export abstract class AbastecimentosRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<Abastecimento[]>;

  abstract create(
    host: string,
    code: string,
    abastecimento: Abastecimento,
  ): Promise<CreatedAbastecimento>;
}

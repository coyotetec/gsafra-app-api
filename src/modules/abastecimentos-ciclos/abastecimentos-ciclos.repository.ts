import { AbastecimentoCiclo } from './entities/abastecimento-ciclo.entity';
import { CreatedAbastecimentoCiclo } from './entities/created-abasteciment-ciclo.entity';

export abstract class AbastecimentosCiclosRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<AbastecimentoCiclo[]>;

  abstract create(
    host: string,
    code: string,
    abastecimentoCiclo: AbastecimentoCiclo,
  ): Promise<CreatedAbastecimentoCiclo>;
}

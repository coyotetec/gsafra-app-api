import { AbastecimentoCicloTalhaoSafra } from './entities/abastecimento-ciclo-talhao-safra.entity';
import { CreatedAbastecimentoCicloTalhaoSafra } from './entities/created-abastecimento-ciclo-talhao-safra.entity';

export abstract class AbastecimentosCiclosTalhoesSafrasRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<AbastecimentoCicloTalhaoSafra[]>;

  abstract create(
    host: string,
    code: string,
    abastecimentoCicloTalhaoSafra: AbastecimentoCicloTalhaoSafra,
  ): Promise<CreatedAbastecimentoCicloTalhaoSafra>;
}

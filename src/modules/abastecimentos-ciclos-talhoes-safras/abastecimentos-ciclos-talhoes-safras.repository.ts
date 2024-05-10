import { AbastecimentoCicloTalhaoSafra } from './entities/abastecimento-ciclo-talhao-safra.entity';

export abstract class AbastecimentosCiclosTalhoesSafrasRepository {
  abstract findMany(
    host: string,
    code: string,
  ): Promise<AbastecimentoCicloTalhaoSafra[]>;

  abstract create(
    host: string,
    code: string,
    abastecimentoCicloTalhaoSafra: AbastecimentoCicloTalhaoSafra,
  ): Promise<void>;
}

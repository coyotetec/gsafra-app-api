import { AbastecimentoCicloTalhaoSafra } from './entities/abastecimento-ciclo-talhao-safra.entity';

export abstract class AbastecimentosCiclosTalhoesSafrasRepository {
  abstract findMany(
    host: string,
    code: string,
  ): Promise<AbastecimentoCicloTalhaoSafra[]>;
}

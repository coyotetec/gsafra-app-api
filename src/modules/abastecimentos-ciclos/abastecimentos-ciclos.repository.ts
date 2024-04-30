import { AbastecimentoCiclo } from './entities/abastecimento-ciclo.entity';

export abstract class AbastecimentosCiclosRepository {
  abstract findMany(host: string, code: string): Promise<AbastecimentoCiclo[]>;
}

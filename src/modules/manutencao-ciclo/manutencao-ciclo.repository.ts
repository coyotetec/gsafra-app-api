import { ManutencaoCiclo } from './entities/manutencao.entity';

export abstract class ManutencaoCicloRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<ManutencaoCiclo[]>;
}

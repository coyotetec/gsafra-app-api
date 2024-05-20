import { PlanejamentoAtividade } from './entities/planejamento-atividade.entity';

export abstract class PlanejamentosAtividadesRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<PlanejamentoAtividade[]>;
}

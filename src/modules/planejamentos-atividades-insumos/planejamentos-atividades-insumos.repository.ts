import { PlanejamentoAtividadeInsumo } from './entities/planejamento-atividade-insumo.entity';

export abstract class PlanejamentosAtividadesInsumosRepository {
  abstract findMany(
    host: string,
    code: string,
  ): Promise<PlanejamentoAtividadeInsumo[]>;
}

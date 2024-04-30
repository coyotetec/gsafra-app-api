import { PlanejamentoAtividadeTalhaoSafra } from './entities/planejamento-atividade-talhao-safra.entity';

export abstract class PlanejamentosAtividadesTalhoesSafrasRepository {
  abstract findMany(
    host: string,
    code: string,
  ): Promise<PlanejamentoAtividadeTalhaoSafra[]>;
}

import { PlanejamentoAtividadeMaquina } from './entities/planejamento-atividade-maquina.entity';

export abstract class PlanejamentosAtividadesMaquinasRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<PlanejamentoAtividadeMaquina[]>;
}

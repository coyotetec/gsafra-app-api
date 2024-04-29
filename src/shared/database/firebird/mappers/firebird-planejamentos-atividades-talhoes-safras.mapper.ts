import { PlanejamentoAtividadeTalhaoSafra } from 'src/modules/planejamentos-atividades-talhoes-safra/entities/planejamento-atividade-talhao-safra.entity';

interface FirebirdPlanejamentoAtividadeTalhaoSafra {
  ID: number;
  ID_PLAN_ATV: number;
  ID_TALHAO_SAFRA: number;
  HECTARES: number;
  PROPORCAO: number;
}

export class FirebirdPlanejamentosAtividadesTalhoesSafrasMapper {
  static toDomain(
    raw: FirebirdPlanejamentoAtividadeTalhaoSafra,
  ): PlanejamentoAtividadeTalhaoSafra {
    return new PlanejamentoAtividadeTalhaoSafra({
      id: raw.ID,
      idPlanAtv: raw.ID_PLAN_ATV,
      idTalhaoSafra: raw.ID_TALHAO_SAFRA,
      hectares: raw.HECTARES,
      proporcao: raw.PROPORCAO,
    });
  }
}

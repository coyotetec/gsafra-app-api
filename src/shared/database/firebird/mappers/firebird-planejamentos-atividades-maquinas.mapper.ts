import { PlanejamentoAtividadeMaquina } from 'src/modules/planejamentos-atividades-maquinas/entities/planejamento-atividade-maquina.entity';

interface FirebirdPlanejamentoAtividadeMaquina {
  ID: number;
  ID_PLAN_ATV: number;
  ID_PATRIMONIO: number;
  AGUA_TANQUE: number;
  HORAS: number;
  OPERADOR: string;
  PREPARADOR_CALDA: string;
}

export class FirebirdPlanejamentosAtividadesMaquinasMapper {
  static toDomain(
    raw: FirebirdPlanejamentoAtividadeMaquina,
  ): PlanejamentoAtividadeMaquina {
    return new PlanejamentoAtividadeMaquina({
      id: raw.ID,
      idPlanAtv: raw.ID_PLAN_ATV,
      idPatrimonio: raw.ID_PATRIMONIO,
      aguaTanque: raw.AGUA_TANQUE,
      horas: raw.HORAS,
      operador: raw.OPERADOR,
      preparadorCalda: raw.PREPARADOR_CALDA,
    });
  }
}

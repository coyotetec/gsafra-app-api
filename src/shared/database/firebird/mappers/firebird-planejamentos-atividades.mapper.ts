import { PlanejamentoAtividade } from 'src/modules/planejamentos-atividades/entities/planejamento-atividade.entity';

interface FirebirdPlanejamentoAtividade {
  ID: number;
  ID_AGRI_APLICACAO_FASE: number;
  ID_AGRI_FASE: number;
  ID_AGRI_TIPO_APLICACAO: number;
  ID_CICLO_PRODUCAO: number;
  ID_ESTACAO_FENOLOGICO: number;
  ID_PLAN_ATV_CLONE: number;
  ID_PLAN_ATV_ORIGEM: number;
  ID_TIPO_ATIVIDADE: number;
  DATA_INICIO: Date;
  DATA_TERMINO: Date;
  DATA_CONCLUSAO_ATIVIDADE: Date;
  DESCRICAO: string;
  MOTIVO_APLICACAO: string;
  OBS: string;
  SITUACAO: number;
  TOTAL_AREA: number;
  TOTAL_AREA_TRABALHADA: number;
  VAZAO_HA: number;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdPlanejamentosAtividadesMapper {
  static toDomain(raw: FirebirdPlanejamentoAtividade): PlanejamentoAtividade {
    return new PlanejamentoAtividade({
      id: raw.ID,
      idAgriAplicacaoFase: raw.ID_AGRI_APLICACAO_FASE,
      idAgriFase: raw.ID_AGRI_FASE,
      idAgriTipoAplicacao: raw.ID_AGRI_TIPO_APLICACAO,
      idCicloProducao: raw.ID_CICLO_PRODUCAO,
      idEstacaoFenologico: raw.ID_ESTACAO_FENOLOGICO,
      idPlanAtvClone: raw.ID_PLAN_ATV_CLONE,
      idPlanAtvOrigem: raw.ID_PLAN_ATV_ORIGEM,
      idTipoAtividade: raw.ID_TIPO_ATIVIDADE,
      dataInicio: raw.DATA_INICIO,
      dataTermino: raw.DATA_TERMINO,
      dataConclusaoAtividade: raw.DATA_CONCLUSAO_ATIVIDADE,
      descricao: raw.DESCRICAO,
      motivoAplicacao: raw.MOTIVO_APLICACAO,
      obs: raw.OBS,
      situacao: raw.SITUACAO,
      totalArea: raw.TOTAL_AREA,
      totalAreaTrabalhada: raw.TOTAL_AREA_TRABALHADA,
      vazaoHa: raw.VAZAO_HA,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

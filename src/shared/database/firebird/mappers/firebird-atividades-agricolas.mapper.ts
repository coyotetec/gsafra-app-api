import { AtividadeAgricola } from 'src/modules/atividades-agricolas/entities/atividade-agricola.entity';

interface FirebirdAtividadeAgricola {
  ID: number;
  ID_AGRI_APLICACAO_FASE: number;
  ID_AGRI_FASE: number;
  ID_AGRI_TIPO_APLICACAO: number;
  ID_CICLO_PRODUCAO: number;
  ID_DISPOSITIVO: number;
  ID_ESTACAO_FENOLOGICO: number;
  ID_FICHA_APLICACAO_BOMBA: number;
  ID_PLAN_ATV: number;
  ID_TIPO_ATIVIDADE: number;
  ID_USUARIO: number;
  DATA_INICIO: Date;
  DATA_TERMINO: Date;
  DESCRICAO: string;
  DISPOSITIVO: string;
  DISPOSITIVO_INFORMACOES: string;
  OBS: string;
  SITUACAO: number;
  STATUS_PROCESSAMENTO: number;
  TOTAL_AREA: number;
  TOTAL_AREA_TRABALHADA: number;
}

export class FirebirdAtividadesAgricolasMapper {
  static toDomain(raw: FirebirdAtividadeAgricola): AtividadeAgricola {
    return new AtividadeAgricola({
      id: raw.ID,
      idAgriAplicacaoFase: raw.ID_AGRI_APLICACAO_FASE,
      idAgriFase: raw.ID_AGRI_FASE,
      idAgriTipoAplicacao: raw.ID_AGRI_TIPO_APLICACAO,
      idCicloProducao: raw.ID_CICLO_PRODUCAO,
      idDispositivo: raw.ID_DISPOSITIVO,
      idEstacaoFenologico: raw.ID_ESTACAO_FENOLOGICO,
      idFichaAplicacaoBomba: raw.ID_FICHA_APLICACAO_BOMBA,
      idPlanAtv: raw.ID_PLAN_ATV,
      idTipoAtividade: raw.ID_TIPO_ATIVIDADE,
      idUsuario: raw.ID_USUARIO,
      dataInicio: raw.DATA_INICIO,
      dataTermino: raw.DATA_TERMINO,
      descricao: raw.DESCRICAO,
      dispositivo: raw.DISPOSITIVO,
      dispositivoInformacoes: raw.DISPOSITIVO_INFORMACOES,
      obs: raw.OBS,
      situacao: raw.SITUACAO,
      statusProcessamento: raw.STATUS_PROCESSAMENTO,
      totalArea: raw.TOTAL_AREA,
      totalAreaTrabalhada: raw.TOTAL_AREA_TRABALHADA,
    });
  }
}

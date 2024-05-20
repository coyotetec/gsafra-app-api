enum SituacaoType {
  A_FAZER = 1,
  EM_PROGRESSO = 2,
  REVISAR = 3,
  CONCLUIDA = 4,
}

export enum StatusProcessamentoType {
  PENDENTE = 1,
  CONFIRMADO = 2,
  RECUSADO = 3,
}

export class AtividadeAgricola {
  id?: number;
  idAgriAplicacaoFase?: number;
  idAgriFase: number;
  idAgriTipoAplicacao?: number;
  idCicloProducao: number;
  idDispositivo?: number;
  idEstacaoFenologico?: number;
  idFichaAplicacaoBomba?: number;
  idPlanAtv?: number;
  idTipoAtividade?: number;
  idUsuario?: number;
  dataInicio?: Date;
  dataTermino?: Date;
  descricao?: string;
  dispositivo?: string;
  dispositivoInformacoes?: string;
  obs?: string;
  situacao: SituacaoType;
  statusProcessamento?: StatusProcessamentoType;
  totalArea: number;
  totalAreaTrabalhada: number;
  dataAtualizacao?: Date;

  constructor(props: AtividadeAgricola) {
    this.id = props.id;
    this.idAgriAplicacaoFase = props.idAgriAplicacaoFase;
    this.idAgriFase = props.idAgriFase;
    this.idAgriTipoAplicacao = props.idAgriTipoAplicacao;
    this.idCicloProducao = props.idCicloProducao;
    this.idDispositivo = props.idDispositivo;
    this.idEstacaoFenologico = props.idEstacaoFenologico;
    this.idFichaAplicacaoBomba = props.idFichaAplicacaoBomba;
    this.idPlanAtv = props.idPlanAtv;
    this.idTipoAtividade = props.idTipoAtividade;
    this.idUsuario = props.idUsuario;
    this.dataInicio = props.dataInicio;
    this.dataTermino = props.dataTermino;
    this.descricao = props.descricao;
    this.dispositivo = props.dispositivo;
    this.dispositivoInformacoes = props.dispositivoInformacoes;
    this.obs = props.obs;
    this.situacao = props.situacao;
    this.statusProcessamento = props.statusProcessamento;
    this.totalArea = props.totalArea;
    this.totalAreaTrabalhada = props.totalAreaTrabalhada;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

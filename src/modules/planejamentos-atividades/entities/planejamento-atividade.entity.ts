enum SituacaoType {
  A_FAZER = 1,
  EM_PROGRESSO = 2,
  REVISAR = 3,
  CONCLUIDA = 4,
}

export class PlanejamentoAtividade {
  id: number;
  idAgriAplicacaoFase: number;
  idAgriFase: number;
  idAgriTipoAplicacao: number;
  idCicloProducao: number;
  idEstacaoFenologico: number;
  idPlanAtvClone: number;
  idPlanAtvOrigem: number;
  idTipoAtividade: number;
  dataInicio: Date;
  dataTermino: Date;
  dataConclusaoAtividade: Date;
  descricao: string;
  motivoAplicacao: string;
  obs: string;
  situacao: SituacaoType;
  totalArea: number;
  totalAreaTrabalhada: number;
  vazaoHa: number;
  dataAtualizacao?: Date;

  constructor(props: PlanejamentoAtividade) {
    this.id = props.id;
    this.idAgriAplicacaoFase = props.idAgriAplicacaoFase;
    this.idAgriFase = props.idAgriFase;
    this.idAgriTipoAplicacao = props.idAgriTipoAplicacao;
    this.idCicloProducao = props.idCicloProducao;
    this.idEstacaoFenologico = props.idEstacaoFenologico;
    this.idPlanAtvClone = props.idPlanAtvClone;
    this.idPlanAtvOrigem = props.idPlanAtvOrigem;
    this.idTipoAtividade = props.idTipoAtividade;
    this.dataInicio = props.dataInicio;
    this.dataTermino = props.dataTermino;
    this.dataConclusaoAtividade = props.dataConclusaoAtividade;
    this.descricao = props.descricao;
    this.motivoAplicacao = props.motivoAplicacao;
    this.obs = props.obs;
    this.situacao = props.situacao;
    this.totalArea = props.totalArea;
    this.totalAreaTrabalhada = props.totalAreaTrabalhada;
    this.vazaoHa = props.vazaoHa;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

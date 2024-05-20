enum StatusType {
  INATIVO,
  ATIVO,
}

export class TalhaoSafra {
  id: number;
  idTalhao: number;
  idCicloProducao: number;
  hectares: number;
  dataInicio: Date;
  dataFim: Date;
  status: StatusType;
  idVariedade: number;
  idEstoqueAgriLocal: number;
  dataAtualizacao?: Date;

  constructor(props: TalhaoSafra) {
    this.id = props.id;
    this.idTalhao = props.idTalhao;
    this.idCicloProducao = props.idCicloProducao;
    this.hectares = props.hectares;
    this.dataInicio = props.dataInicio;
    this.dataFim = props.dataFim;
    this.idVariedade = props.idVariedade;
    this.idEstoqueAgriLocal = props.idEstoqueAgriLocal;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

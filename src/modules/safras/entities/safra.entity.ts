enum StatusType {
  INATIVO,
  ATIVO,
}

export class Safra {
  id: number;
  nome: string;
  idCultura: number;
  dataInicio: Date;
  dataFinal: Date;
  status: StatusType;
  producaoEstimada: number;
  producaoMinima: number;
  valorMedioVenda: number;
  dataAtualizacao?: Date;

  constructor(props: Safra) {
    this.id = props.id;
    this.nome = props.nome;
    this.idCultura = props.idCultura;
    this.dataInicio = props.dataInicio;
    this.dataFinal = props.dataFinal;
    this.status = props.status;
    this.producaoEstimada = props.producaoEstimada;
    this.producaoMinima = props.producaoMinima;
    this.valorMedioVenda = props.valorMedioVenda;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

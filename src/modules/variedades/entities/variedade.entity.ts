enum StatusType {
  INATIVO,
  ATIVO,
}

export class Variedade {
  id: number;
  nome: string;
  idCultura: number;
  ciclo: number;
  status: StatusType;
  dataAtualizacao?: Date;

  constructor(props: Variedade) {
    this.id = props.id;
    this.nome = props.nome;
    this.idCultura = props.idCultura;
    this.ciclo = props.ciclo;
    this.status = props.status;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

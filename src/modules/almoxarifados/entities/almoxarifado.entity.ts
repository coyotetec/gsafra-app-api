enum StatusType {
  INATIVO,
  ATIVO,
}

export class Almoxarifado {
  id: number;
  nome: string;
  idFazenda: number;
  status: StatusType;

  constructor(props: Almoxarifado) {
    this.id = props.id;
    this.nome = props.nome;
    this.idFazenda = props.idFazenda;
    this.status = props.status;
  }
}

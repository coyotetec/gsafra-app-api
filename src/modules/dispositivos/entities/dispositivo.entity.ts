export enum StatusType {
  INATIVO,
  ATIVO,
}

export class Dispositivo {
  id: number;
  nome: string;
  informacoes: string;
  status: StatusType;

  constructor(props: Dispositivo) {
    this.id = props.id;
    this.nome = props.nome;
    this.informacoes = props.informacoes;
    this.status = props.status;
  }
}

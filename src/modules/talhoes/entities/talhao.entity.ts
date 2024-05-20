enum StatusType {
  INATIVO,
  ATIVO,
}

export class Talhao {
  id: number;
  descricao: string;
  dataCadastro: Date;
  dataDesativado: Date;
  hectares: number;
  status: StatusType;
  idFazenda: number;
  coordenadas: string;
  dataAtualizacao?: Date;

  constructor(props: Talhao) {
    this.id = props.id;
    this.descricao = props.descricao;
    this.dataCadastro = props.dataCadastro;
    this.dataDesativado = props.dataDesativado;
    this.hectares = props.hectares;
    this.status = props.status;
    this.idFazenda = props.idFazenda;
    this.coordenadas = props.coordenadas;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

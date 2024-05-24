enum PermitirFracionarType {
  FALSO,
  VERDADEIRO,
}

export class Unidade {
  id: number;
  nome: string;
  sigla: string;
  permitirFracionar: PermitirFracionarType;
  dataAtualizacao?: Date;

  constructor(props: Unidade) {
    this.id = props.id;
    this.nome = props.nome;
    this.sigla = props.sigla;
    this.permitirFracionar = props.permitirFracionar;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

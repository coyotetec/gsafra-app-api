export class TipoAplicacao {
  id: number;
  nome: string;
  dataAtualizacao?: Date;

  constructor(props: TipoAplicacao) {
    this.id = props.id;
    this.nome = props.nome;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

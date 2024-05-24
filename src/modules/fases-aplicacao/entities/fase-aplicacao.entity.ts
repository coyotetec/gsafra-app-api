export class FaseAplicacao {
  id: number;
  nome: string;
  dataAtualizacao?: Date;

  constructor(props: FaseAplicacao) {
    this.id = props.id;
    this.nome = props.nome;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

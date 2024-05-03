export class TipoAplicacao {
  id: number;
  nome: string;

  constructor(props: TipoAplicacao) {
    this.id = props.id;
    this.nome = props.nome;
  }
}

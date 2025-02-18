export class TipoManutencao {
  id: number;
  nome: string;
  

  constructor(props: TipoManutencao) {
    this.id = props.id;
    this.nome = props.nome;
  }
}

export class Estoque {
  id: number;
  estoqueAtual : number;
  precoVenda: number;
  nome: string;
  custoAtual: number
  custoMedio: number
  unidade: string
  sigla: string

  constructor(props: Estoque) {
    this.id = props.id;
    this.estoqueAtual = props.estoqueAtual;
    this.precoVenda = props.precoVenda;
    this.nome = props.nome;
    this.custoAtual = props.custoAtual;
    this.custoMedio = props.custoMedio;
    this.unidade = props.unidade;
    this.sigla = props.sigla;
  }
}

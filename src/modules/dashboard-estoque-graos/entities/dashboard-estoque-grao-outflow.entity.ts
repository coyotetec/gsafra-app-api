export class DashboardEstoqueGraosOutflow {
  idProdutor: number;
  produtor: string;
  peso: number;
  descontoClassificacao: number;
  pesoLiquido: number;

  constructor(props: DashboardEstoqueGraosOutflow) {
    this.idProdutor = props.idProdutor;
    this.produtor = props.produtor;
    this.peso = props.peso;
    this.descontoClassificacao = props.descontoClassificacao;
    this.pesoLiquido = props.pesoLiquido;
  }
}

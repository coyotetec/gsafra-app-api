export class DashboardEstoqueGraosEntries {
  idProdutor: number;
  produtor: string;
  peso: number;
  descontoClassificacao: number;
  taxaRecepcao: number;
  cotaCapital: number;
  taxaArmazenamento: number;
  quebraTecnica: number;
  pesoLiquido: number;

  constructor(props: DashboardEstoqueGraosEntries) {
    this.idProdutor = props.idProdutor;
    this.produtor = props.produtor;
    this.peso = props.peso;
    this.descontoClassificacao = props.descontoClassificacao;
    this.taxaRecepcao = props.taxaRecepcao;
    this.cotaCapital = props.cotaCapital;
    this.taxaArmazenamento = props.taxaArmazenamento;
    this.quebraTecnica = props.quebraTecnica;
    this.pesoLiquido = props.pesoLiquido;
  }
}

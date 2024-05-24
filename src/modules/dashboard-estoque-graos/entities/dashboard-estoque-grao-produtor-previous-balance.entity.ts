export class DashboardEstoqueGraoProdutorPreviousBalance {
  producerId: number;
  producer: string;
  balance: number;

  constructor(props: DashboardEstoqueGraoProdutorPreviousBalance) {
    this.producerId = props.producerId;
    this.producer = props.producer;
    this.balance = props.balance;
  }
}

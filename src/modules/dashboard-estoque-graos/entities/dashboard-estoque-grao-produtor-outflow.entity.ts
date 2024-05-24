export class DashboardEstoqueGraosProdutorOutflow {
  producerId: number;
  producer: string;
  weight: number;
  ratingDiscount: number;
  netWeight: number;

  constructor(props: DashboardEstoqueGraosProdutorOutflow) {
    this.producerId = props.producerId;
    this.producer = props.producer;
    this.weight = props.weight;
    this.ratingDiscount = props.ratingDiscount;
    this.netWeight = props.netWeight;
  }
}

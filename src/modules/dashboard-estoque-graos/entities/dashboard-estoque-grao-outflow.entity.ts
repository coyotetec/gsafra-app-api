export class DashboardEstoqueGraosOutflow {
  weight: number;
  ratingDiscount: number;
  netWeight: number;

  constructor(props: DashboardEstoqueGraosOutflow) {
    this.weight = props.weight;
    this.ratingDiscount = props.ratingDiscount;
    this.netWeight = props.netWeight;
  }
}

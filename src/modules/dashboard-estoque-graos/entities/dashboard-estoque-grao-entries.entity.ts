export class DashboardEstoqueGraosEntries {
  weight: number;
  ratingDiscount: number;
  receivingFee: number;
  capitalQuota: number;
  storageFee: number;
  technicalBreaks: number;
  netWeight: number;

  constructor(props: DashboardEstoqueGraosEntries) {
    this.weight = props.weight;
    this.ratingDiscount = props.ratingDiscount;
    this.receivingFee = props.receivingFee;
    this.capitalQuota = props.capitalQuota;
    this.storageFee = props.storageFee;
    this.technicalBreaks = props.technicalBreaks;
    this.netWeight = props.netWeight;
  }
}

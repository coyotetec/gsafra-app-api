export class DashboardEstoqueGraosProdutorEntries {
  producerId: number;
  producer: string;
  weight: number;
  ratingDiscount: number;
  receivingFee: number;
  capitalQuota: number;
  storageFee: number;
  technicalBreaks: number;
  netWeight: number;

  constructor(props: DashboardEstoqueGraosProdutorEntries) {
    this.producerId = props.producerId;
    this.producer = props.producer;
    this.weight = props.weight;
    this.ratingDiscount = props.ratingDiscount;
    this.receivingFee = props.receivingFee;
    this.capitalQuota = props.capitalQuota;
    this.storageFee = props.storageFee;
    this.technicalBreaks = props.technicalBreaks;
    this.netWeight = props.netWeight;
  }
}

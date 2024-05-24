export class DashboardEstoqueGraosProdutor {
  producerId: number;
  producer: string;
  previousBalance: number;
  entries: {
    weight: number;
    ratingDiscount: number;
    receivingFee: number;
    capitalQuota: number;
    storageFee: number;
    technicalBreaks: number;
    netWeight: number;
  };
  outflows: {
    weight: number;
    ratingDiscount: number;
    netWeight: number;
  };
  finalBalance: number;

  constructor(props: DashboardEstoqueGraosProdutor) {
    this.producerId = props.producerId;
    this.producer = props.producer;
    this.previousBalance = props.previousBalance;
    this.entries = props.entries;
    this.outflows = props.outflows;
    this.finalBalance = props.finalBalance;
  }
}

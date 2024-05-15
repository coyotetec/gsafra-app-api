export class FinanceiroViewTotalizerData {
  name: string;
  error?: string;
  total?: number;
  format?: number;

  constructor(props: FinanceiroViewTotalizerData) {
    this.name = props.name;
    this.error = props.error;
    this.total = props.total;
    this.format = props.format;
  }
}

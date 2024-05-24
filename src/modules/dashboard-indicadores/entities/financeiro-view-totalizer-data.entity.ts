export class FinanceiroViewTotalizerData {
  id: number;
  name: string;
  error?: string;
  total?: number;
  format?: number;

  constructor(props: FinanceiroViewTotalizerData) {
    this.id = props.id;
    this.name = props.name;
    this.error = props.error;
    this.total = props.total;
    this.format = props.format;
  }
}

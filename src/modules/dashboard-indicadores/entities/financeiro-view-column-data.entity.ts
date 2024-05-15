export class FinanceiroViewColumnData {
  id: number;
  name: string;
  total: number;
  absoluteTotal: number;
  visible: boolean;

  constructor(props: FinanceiroViewColumnData) {
    this.id = props.id;
    this.name = props.name;
    this.total = props.total;
    this.absoluteTotal = props.absoluteTotal;
    this.visible = props.visible;
  }
}

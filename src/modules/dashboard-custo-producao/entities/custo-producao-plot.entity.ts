export class CustoProducaoPlot {
  total: number;
  hectareTotal: number;
  area: number;
  harvest: string;
  plot: string;
  variety: string;
  plotVariety: string;

  constructor(props: CustoProducaoPlot) {
    this.total = props.total;
    this.hectareTotal = props.hectareTotal;
    this.area = props.area;
    this.harvest = props.harvest;
    this.plot = props.plot;
    this.variety = props.variety;
    this.plotVariety = props.plotVariety;
  }
}

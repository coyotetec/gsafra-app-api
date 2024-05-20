export class PlanejamentoAtividadeTalhaoSafra {
  id: number;
  idPlanAtv: number;
  idTalhaoSafra: number;
  hectares: number;
  proporcao: number;
  dataAtualizacao?: Date;

  constructor(props: PlanejamentoAtividadeTalhaoSafra) {
    this.id = props.id;
    this.idPlanAtv = props.idPlanAtv;
    this.idTalhaoSafra = props.idTalhaoSafra;
    this.hectares = props.hectares;
    this.proporcao = props.proporcao;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

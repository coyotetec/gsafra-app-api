export class AtividadeAgricolaTalhaoSafra {
  id: number;
  idAgriAtv: number;
  idTalhaoSafra: number;
  hectares: number;
  proporcao: number;
  hectaresPlanejamento: number;
  proporcaoPlanejamento: number;

  constructor(props: AtividadeAgricolaTalhaoSafra) {
    this.id = props.id;
    this.idAgriAtv = props.idAgriAtv;
    this.idTalhaoSafra = props.idTalhaoSafra;
    this.hectares = props.hectares;
    this.proporcao = props.proporcao;
    this.hectaresPlanejamento = props.hectaresPlanejamento;
    this.proporcaoPlanejamento = props.proporcaoPlanejamento;
  }
}

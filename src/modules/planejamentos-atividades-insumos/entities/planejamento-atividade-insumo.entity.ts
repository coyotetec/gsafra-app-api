export class PlanejamentoAtividadeInsumo {
  id: number;
  idPlanAtv: number;
  idProdutoAlmoxarifado: number;
  idUnidade: number;
  qtde: number;

  constructor(props: PlanejamentoAtividadeInsumo) {
    this.id = props.id;
    this.idPlanAtv = props.idPlanAtv;
    this.idProdutoAlmoxarifado = props.idProdutoAlmoxarifado;
    this.idUnidade = props.idUnidade;
    this.qtde = props.qtde;
  }
}

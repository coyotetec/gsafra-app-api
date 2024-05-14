export enum EstoqueMovimentadoType {
  FALSO,
  VERDADEIRO,
}

export class AtividadeAgricolaInsumo {
  id?: number;
  idAgriAtv: number;
  idAlmoxarifado: number;
  idFichaAplBombaProduto?: number;
  idPlanAtvInsumo?: number;
  idProdutoAlmoxarifado: number;
  idUnidade: number;
  custoAtual: number;
  custoMedio: number;
  estoqueMovimentado: EstoqueMovimentadoType;
  qtde: number;

  constructor(props: AtividadeAgricolaInsumo) {
    this.id = props.id;
    this.idAgriAtv = props.idAgriAtv;
    this.idAlmoxarifado = props.idAlmoxarifado;
    this.idFichaAplBombaProduto = props.idFichaAplBombaProduto;
    this.idPlanAtvInsumo = props.idPlanAtvInsumo;
    this.idProdutoAlmoxarifado = props.idProdutoAlmoxarifado;
    this.idUnidade = props.idUnidade;
    this.custoAtual = props.custoAtual;
    this.custoMedio = props.custoMedio;
    this.estoqueMovimentado = props.estoqueMovimentado;
    this.qtde = props.qtde;
  }
}

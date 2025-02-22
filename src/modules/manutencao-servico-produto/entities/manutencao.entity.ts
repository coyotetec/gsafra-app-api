export class ManutencaoServicoProduto {
  id?: number;
  idManutencaoServico: number;
  idProdutoAlmoxarifado?: number;
  idAlmoxarifado: number;
  qtde: number
  idUnidade: number
  custoMedio: number
  custoAnual: number
  total: number
  estoqueMovimentado: number

  constructor(props: ManutencaoServicoProduto) {
    this.id = props.id;
    this.idManutencaoServico = props.idManutencaoServico;
    this.idProdutoAlmoxarifado = props.idProdutoAlmoxarifado;
    this.idAlmoxarifado = props.idAlmoxarifado;
    this.qtde = props.qtde;
    this.idUnidade = props.idUnidade;
    this.custoMedio = props.custoMedio;
    this.custoAnual = props.custoAnual;
    this.total = props.total;
    this.estoqueMovimentado = props.estoqueMovimentado;
  }
}

export class RequisicaoProduto {
  idRequisicaoAlmoxarifadoM: number;
  idProdutoAlmoxarifado: number;
  descricaoProdutoSemCadastro: string;
  und: string;
  dataHoraAtualInclusao: string;
  dataHoraAtualEdicao: string;
  quantidade: number;
  precoAtual: number;
  custoMedioAtual: number;
  observacoes: string;

  constructor(props: RequisicaoProduto) {
    this.idRequisicaoAlmoxarifadoM = props.idRequisicaoAlmoxarifadoM;
    this.idProdutoAlmoxarifado = props.idProdutoAlmoxarifado;
    this.descricaoProdutoSemCadastro = props.descricaoProdutoSemCadastro;
    this.und = props.und;
    this.dataHoraAtualInclusao = props.dataHoraAtualInclusao;
    this.dataHoraAtualEdicao = props.dataHoraAtualEdicao;
    this.quantidade = props.quantidade;
    this.precoAtual = props.precoAtual;
    this.custoMedioAtual = props.custoMedioAtual;
    this.observacoes = props.observacoes;
  }
}

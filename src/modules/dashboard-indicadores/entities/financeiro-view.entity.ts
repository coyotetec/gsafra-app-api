enum SituacaoType {
  INATIVO,
  ATIVO,
}

export class FinanceiroView {
  id: number;
  nome: string;
  situacao: SituacaoType;
  periodoPadraoMeses?: number;

  constructor(props: FinanceiroView) {
    this.id = props.id;
    this.nome = props.nome;
    this.situacao = props.situacao;
    this.periodoPadraoMeses = props.periodoPadraoMeses;
  }
}

enum TodosTalhoesType {
  FALSO,
  VERDADEIRO,
}

export class AbastecimentoCiclo {
  id?: number;
  idAbastecimento: number;
  idCicloProducao: number;
  proporcao: number;
  qtdeTalhoes: number;
  todosTalhoes?: TodosTalhoesType;
  totalHectares: number;
  valor: number;
  valorCustoAtual: number;
  dataAtualizacao?: Date;

  constructor(props: AbastecimentoCiclo) {
    this.id = props.id;
    this.idAbastecimento = props.idAbastecimento;
    this.idCicloProducao = props.idCicloProducao;
    this.proporcao = props.proporcao;
    this.qtdeTalhoes = props.qtdeTalhoes;
    this.todosTalhoes = props.todosTalhoes;
    this.totalHectares = props.totalHectares;
    this.valor = props.valor;
    this.valorCustoAtual = props.valorCustoAtual;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

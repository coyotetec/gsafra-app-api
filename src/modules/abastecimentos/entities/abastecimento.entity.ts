enum EstoqueMovimentadoType {
  NAO,
  SIM,
}

enum statusProcessamentoType {
  PENDENTE = 1,
  APROVADO = 2,
  REPROVADO = 3,
}

export class Abastecimento {
  id: number;
  idAgriAtvMaquina: number;
  idAlmoxarifado: number;
  idPatrimonio: number;
  idProdutoAlmoxarifado: number;
  idUsuario: number;
  custoAtual: number;
  custoMedio: number;
  data: Date;
  dispositivo: string;
  dispositivoInformacoes: string;
  estoqueMovimentado: EstoqueMovimentadoType;
  horimetro: number;
  numeroRequisicao: string;
  quantidade: number;
  statusProcessamento: statusProcessamentoType;
  totalAtual: number;
  totalMedio: number;

  constructor(props: Abastecimento) {
    this.id = props.id;
    this.idAgriAtvMaquina = props.idAgriAtvMaquina;
    this.idAlmoxarifado = props.idAlmoxarifado;
    this.idPatrimonio = props.idPatrimonio;
    this.idProdutoAlmoxarifado = props.idProdutoAlmoxarifado;
    this.idUsuario = props.idUsuario;
    this.custoAtual = props.custoAtual;
    this.custoMedio = props.custoMedio;
    this.data = props.data;
    this.dispositivo = props.dispositivo;
    this.dispositivoInformacoes = props.dispositivoInformacoes;
    this.estoqueMovimentado = props.estoqueMovimentado;
    this.horimetro = props.horimetro;
    this.numeroRequisicao = props.numeroRequisicao;
    this.quantidade = props.quantidade;
    this.statusProcessamento = props.statusProcessamento;
    this.totalAtual = props.totalAtual;
    this.totalMedio = props.totalMedio;
  }
}

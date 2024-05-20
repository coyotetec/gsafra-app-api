enum TipoProdutoAlmoxarifado {
  INSUMOS_AGRICOLAS = 1,
  INSUMOS_MAQUINAS = 2,
  COMBUSTIVEL = 3,
  OUTROS = 99,
}

enum StatusType {
  INATIVO,
  ATIVO,
}

enum PlanoContaDefinidoType {
  FALSO,
  VERDADEIRO,
}

enum IntervaloREentradaType {
  FALSO,
  VERDADEIRO,
}

enum PeriodoCarenciaType {
  FALSO,
  VERDADEIRO,
}

export class ProdutoAlmoxarifado {
  id: number;
  idMarca: number;
  idUnidade: number;
  idGrupo: number;
  idSubgrupo: number;
  tipo: TipoProdutoAlmoxarifado;
  nome: string;
  refFabricante: string;
  custoMedio: number;
  custoAtual: number;
  estoqueMinimo: number;
  dataCadastro: Date;
  status: StatusType;
  doseHa: number;
  planoContaDefinido: PlanoContaDefinidoType;
  idPlanoConta: number;
  intervaloReentrada: IntervaloREentradaType;
  periodoCarencia: PeriodoCarenciaType;
  classeToxicologica: string;
  codigoParalelo: string;
  precoVenda: number;
  margem: number;
  dataAtualizacao?: Date;

  constructor(props: ProdutoAlmoxarifado) {
    this.id = props.id;
    this.idMarca = props.idMarca;
    this.idUnidade = props.idUnidade;
    this.idGrupo = props.idGrupo;
    this.idSubgrupo = props.idSubgrupo;
    this.tipo = props.tipo;
    this.nome = props.nome;
    this.refFabricante = props.refFabricante;
    this.custoMedio = props.custoMedio;
    this.custoAtual = props.custoAtual;
    this.estoqueMinimo = props.estoqueMinimo;
    this.dataCadastro = props.dataCadastro;
    this.status = props.status;
    this.doseHa = props.doseHa;
    this.planoContaDefinido = props.planoContaDefinido;
    this.idPlanoConta = props.idPlanoConta;
    this.intervaloReentrada = props.intervaloReentrada;
    this.periodoCarencia = props.periodoCarencia;
    this.classeToxicologica = props.classeToxicologica;
    this.codigoParalelo = props.codigoParalelo;
    this.precoVenda = props.precoVenda;
    this.margem = props.margem;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

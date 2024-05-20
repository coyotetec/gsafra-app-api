enum TipoBemType {
  IMOVEL = 1,
  MOVEL = 2,
  FERRAMENTA = 3,
  OUTROS = 4,
  ESTAÇÃO_METEOROLOGICA = 5,
}

enum StatusType {
  ATIVO = 1,
  EMPRESTADO = 2,
  ALUGADO = 3,
  VENDIDO = 4,
  EM_MANUTENCAO = 5,
}

enum PatrimonioTerceiroType {
  FALSO,
  VERDADEIRO,
}

enum AvisarVencimentoSeguroType {
  FALSO,
  VERDADEIRO,
}

enum AvisarSeguroDiasAntesType {
  SIM = 1,
  NAO = 2,
}

enum TipoProprietarioType {
  TAC_AGREGADO,
  TAC_INDEPENDENTE,
  OUTROS,
}

enum TipoRodadoType {
  TRUCK = 1,
  TOCO = 2,
  CAVALO_MECANICO = 3,
  VAN = 4,
  UTILITARIO = 5,
  OUTROS = 6,
}

enum TipoCarroceriaType {
  NAO_APLICAVEL,
  ABERTA,
  FECHADA_BAU,
  GRANELEIRA,
  PORTA_CONTAINER,
  SIDER,
}

enum PossuiAnexoType {
  FALSO,
  VERDADEIRO,
}

export class Patrimonio {
  id: number;
  descricao: string;
  marca: string;
  placa: string;
  chassisSerie: string;
  anoFabricacao: number;
  dataLicenciamento: Date;
  planoContaCombustivel: number;
  planoContaLicenciamento: number;
  planoContaSeguro: number;
  planoContaManutencao: number;
  planoContaMotorista: number;
  planoContaPneu: number;
  planoContaMulta: number;
  planoContaOutras: number;
  renavam: string;
  proprietario: string;
  valorReal: number;
  valorDolar: number;
  dataReferencialValor: Date;
  dataBaixa: Date;
  motivoBaixa: string;
  tipoBem: TipoBemType;
  nomeResponsavel: string;
  idTipoPatrimonio: number;
  status: StatusType;
  patrimonioTerceiro: PatrimonioTerceiroType;
  idFornecedor: number;
  horimetro: number;
  serieTrator: string;
  serieTracao: string;
  modeloTracao: string;
  potencia: string;
  medidaPneuFuros: string;
  vidaUtil: number;
  sucataPercentual: number;
  sucataValor: number;
  depreciacaoAnual: number;
  modalidadeFinanciamento: string;
  valorSeguro: number;
  valorManutencaoAnual: number;
  dataCompra: Date;
  valorFinanciado: number;
  parcelas: number;
  jurosTotal: number;
  vencimentoPrimeiraParc: Date;
  vencimentoUltimaParc: Date;
  cor: string;
  anoSucata: number;
  dataSeguro: Date;
  obs: string;
  idPessoa: number;
  equipamentoModelo: string;
  voltagem: string;
  localDeUso: string;
  equipamentoPotencia: string;
  numeroApolice: string;
  seguradora: string;
  foneSeguradora: string;
  observacaoSeguro: string;
  avisarVencimentoSeguro: AvisarVencimentoSeguroType;
  avisarSeguroDiasAntes: AvisarSeguroDiasAntesType;
  rntrc: number;
  tara: number;
  capacidadeKg: number;
  capacidadeM3: number;
  tipoProprietario: TipoProprietarioType;
  tipoRodado: TipoRodadoType;
  tipoCarroceria: TipoCarroceriaType;
  ufLicenciamento: string;
  aguaTanque: number;
  possuiAnexo: PossuiAnexoType;
  idEmpresa: number;
  identificador: string;
  dataAtualizacao?: Date;

  constructor(props: Patrimonio) {
    this.id = props.id;
    this.descricao = props.descricao;
    this.marca = props.marca;
    this.placa = props.placa;
    this.chassisSerie = props.chassisSerie;
    this.anoFabricacao = props.anoFabricacao;
    this.dataLicenciamento = props.dataLicenciamento;
    this.planoContaCombustivel = props.planoContaCombustivel;
    this.planoContaLicenciamento = props.planoContaLicenciamento;
    this.planoContaSeguro = props.planoContaSeguro;
    this.planoContaManutencao = props.planoContaManutencao;
    this.planoContaMotorista = props.planoContaMotorista;
    this.planoContaPneu = props.planoContaPneu;
    this.planoContaMulta = props.planoContaMulta;
    this.planoContaOutras = props.planoContaOutras;
    this.renavam = props.renavam;
    this.proprietario = props.proprietario;
    this.valorReal = props.valorReal;
    this.valorDolar = props.valorDolar;
    this.dataReferencialValor = props.dataReferencialValor;
    this.dataBaixa = props.dataBaixa;
    this.motivoBaixa = props.motivoBaixa;
    this.tipoBem = props.tipoBem;
    this.nomeResponsavel = props.nomeResponsavel;
    this.idTipoPatrimonio = props.idTipoPatrimonio;
    this.status = props.status;
    this.patrimonioTerceiro = props.patrimonioTerceiro;
    this.idFornecedor = props.idFornecedor;
    this.horimetro = props.horimetro;
    this.serieTrator = props.serieTrator;
    this.serieTracao = props.serieTracao;
    this.modeloTracao = props.modeloTracao;
    this.potencia = props.potencia;
    this.medidaPneuFuros = props.medidaPneuFuros;
    this.vidaUtil = props.vidaUtil;
    this.sucataPercentual = props.sucataPercentual;
    this.sucataValor = props.sucataValor;
    this.depreciacaoAnual = props.depreciacaoAnual;
    this.modalidadeFinanciamento = props.modalidadeFinanciamento;
    this.valorSeguro = props.valorSeguro;
    this.valorManutencaoAnual = props.valorManutencaoAnual;
    this.dataCompra = props.dataCompra;
    this.valorFinanciado = props.valorFinanciado;
    this.parcelas = props.parcelas;
    this.jurosTotal = props.jurosTotal;
    this.vencimentoPrimeiraParc = props.vencimentoPrimeiraParc;
    this.vencimentoUltimaParc = props.vencimentoUltimaParc;
    this.cor = props.cor;
    this.anoSucata = props.anoSucata;
    this.dataSeguro = props.dataSeguro;
    this.obs = props.obs;
    this.idPessoa = props.idPessoa;
    this.equipamentoModelo = props.equipamentoModelo;
    this.voltagem = props.voltagem;
    this.localDeUso = props.localDeUso;
    this.equipamentoPotencia = props.equipamentoPotencia;
    this.numeroApolice = props.numeroApolice;
    this.seguradora = props.seguradora;
    this.foneSeguradora = props.foneSeguradora;
    this.observacaoSeguro = props.observacaoSeguro;
    this.avisarVencimentoSeguro = props.avisarVencimentoSeguro;
    this.avisarSeguroDiasAntes = props.avisarSeguroDiasAntes;
    this.rntrc = props.rntrc;
    this.tara = props.tara;
    this.capacidadeKg = props.capacidadeKg;
    this.capacidadeM3 = props.capacidadeM3;
    this.tipoProprietario = props.tipoProprietario;
    this.tipoRodado = props.tipoRodado;
    this.tipoCarroceria = props.tipoCarroceria;
    this.ufLicenciamento = props.ufLicenciamento;
    this.aguaTanque = props.aguaTanque;
    this.possuiAnexo = props.possuiAnexo;
    this.idEmpresa = props.idEmpresa;
    this.identificador = props.identificador;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

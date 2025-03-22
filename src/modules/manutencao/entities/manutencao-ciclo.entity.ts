export class ManutencaoCicloEntity {
  id?: number;
  idManutencaoM: number;
  idCicloProducao: number;
  totalHectares: number;
  valor: number;
  proporcao: number;
  qtdeTalhoes: number;
  idPatrimonio: number;
  idFornecedor: number;
  tipoManutencao?: number;
  data: string;
  horimetro: number;
  descricao: string | null;
  situacao: number;
  totalServico: number;
  totalPecas: number;
  totalGeral: number;
  idPessoa: number;
  obs: string;

  constructor(props: ManutencaoCicloEntity) {
    this.id = props.id;
    this.idManutencaoM = props.idManutencaoM;
    this.idCicloProducao = props.idCicloProducao;
    this.totalHectares = props.totalHectares;
    this.valor = props.valor;
    this.proporcao = props.proporcao;
    this.qtdeTalhoes = props.qtdeTalhoes;
    this.idPatrimonio = props.idPatrimonio;
    this.idFornecedor = props.idFornecedor;
    this.tipoManutencao = props.tipoManutencao;
    this.data = props.data;
    this.horimetro = props.horimetro;
    this.descricao = props.descricao;
    this.situacao = props.situacao;
    this.totalServico = props.totalServico;
    this.totalPecas = props.totalPecas;
    this.totalGeral = props.totalGeral;
    this.idPessoa = props.idPessoa;
    this.obs = props.obs;
  }
}

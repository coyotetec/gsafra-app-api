export class ManutencaoServico {
  id?: number;
  idManutencaoM: number;
  idTipoManutencao?: number;
  valor: number;
  totalPecas: number
  total: number


  constructor(props: ManutencaoServico) {
    this.id = props.id;
    this.idManutencaoM = props.idManutencaoM;
    this.idTipoManutencao = props.idTipoManutencao;
    this.totalPecas = props.totalPecas;
    this.total = props.total;
    this.totalPecas = props.totalPecas;
    this.valor = props.valor;
  }
}

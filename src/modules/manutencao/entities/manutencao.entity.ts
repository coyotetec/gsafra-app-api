export class Manutencao {
  id?: number;
  idPatrimonio: number;
  tipoManutencao?: number;
  data: string;
  horimetro: number
  descricao: string
  totalServico: number
  totalPecas: number
  totalGeral: number


  constructor(props: Manutencao) {
    this.id = props.id;
    this.idPatrimonio = props.idPatrimonio;
    this.tipoManutencao = props.tipoManutencao;
    this.horimetro = props.horimetro;
    this.totalServico = props.totalServico;
    this.totalPecas = props.totalPecas;
    this.data = props.data;
    this.totalGeral = props.totalGeral;
    this.descricao = props.descricao;
    this.horimetro = props.horimetro;

  }
}

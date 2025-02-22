export class ManutencaoCiclo {
  id?: number;
  idManutencao: number;
  idCicloProducao?: number;
  totalHectares: number;
  valor: number
  proporcao: number
  qtdeTalhoes: number

  constructor(props: ManutencaoCiclo) {
    this.id = props.id;
    this.idManutencao = props.idManutencao;
    this.idCicloProducao = props.idCicloProducao;
    this.proporcao = props.proporcao;
    this.qtdeTalhoes = props.qtdeTalhoes;
    this.totalHectares = props.totalHectares;
    this.valor = props.valor;
  }
}

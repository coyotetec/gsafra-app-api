export class AbastecimentoCicloTalhaoSafra {
  id: number;
  idAbastecimentoCiclo: number;
  idTalhaoSafra: number;
  proporcao: number;
  totalHectares: number;
  valor: number;
  valorCustoAtual: number;

  constructor(props: AbastecimentoCicloTalhaoSafra) {
    this.id = props.id;
    this.idAbastecimentoCiclo = props.idAbastecimentoCiclo;
    this.idTalhaoSafra = props.idTalhaoSafra;
    this.proporcao = props.proporcao;
    this.totalHectares = props.totalHectares;
    this.valor = props.valor;
    this.valorCustoAtual = props.valorCustoAtual;
  }
}

export class PlanejamentoAtividadeMaquina {
  id: number;
  idPlanAtv: number;
  idPatrimonio: number;
  aguaTanque: number;
  horas: number;
  operador: string;
  preparadorCalda: string;

  constructor(props: PlanejamentoAtividadeMaquina) {
    this.id = props.id;
    this.idPlanAtv = props.idPlanAtv;
    this.idPatrimonio = props.idPatrimonio;
    this.aguaTanque = props.aguaTanque;
    this.horas = props.horas;
    this.operador = props.operador;
    this.preparadorCalda = props.preparadorCalda;
  }
}

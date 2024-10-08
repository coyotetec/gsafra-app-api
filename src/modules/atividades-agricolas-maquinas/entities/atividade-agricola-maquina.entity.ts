export class AtividadeAgricolaMaquina {
  id?: number;
  idAgriAtv: number;
  idPatrimonio: number;
  hrInicial?: number;
  hrFinal?: number;
  horas: number;
  dataAtualizacao?: Date;
  operador: string
  preparadorCalda:string

  constructor(props: AtividadeAgricolaMaquina) {
    this.id = props.id;
    this.idAgriAtv = props.idAgriAtv;
    this.idPatrimonio = props.idPatrimonio;
    this.hrInicial = props.hrInicial;
    this.hrFinal = props.hrFinal;
    this.horas = props.horas;
    this.dataAtualizacao = props.dataAtualizacao;
    this.operador = props.operador
    this.preparadorCalda = props.preparadorCalda
  }
}

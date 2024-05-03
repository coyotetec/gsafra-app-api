export class EstadioFenologico {
  id: number;
  idCultura: number;
  nome: string;

  constructor(props: EstadioFenologico) {
    this.id = props.id;
    this.idCultura = props.idCultura;
    this.nome = props.nome;
  }
}

enum SmallIntType {
  FAlSO,
  VERDADEIRO,
}

export class TipoAtividade {
  id: number;
  nome: string;
  preparoSolo: SmallIntType;
  tratamentoSemente: SmallIntType;
  plantio: SmallIntType;
  fertilizacao: SmallIntType;
  aplicacao: SmallIntType;
  colheita: SmallIntType;
  dataAtualizacao?: Date;

  constructor(props: TipoAtividade) {
    this.id = props.id;
    this.nome = props.nome;
    this.preparoSolo = props.preparoSolo;
    this.tratamentoSemente = props.tratamentoSemente;
    this.plantio = props.plantio;
    this.fertilizacao = props.fertilizacao;
    this.aplicacao = props.aplicacao;
    this.colheita = props.colheita;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

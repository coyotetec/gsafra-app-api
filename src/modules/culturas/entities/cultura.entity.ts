enum CulturaType {
  FALSO,
  VERDADEIRO,
}

export class Cultura {
  id: number;
  nome: string;
  pesoSaca: number;
  idUnidade: number;
  ncm: string;
  cultura: CulturaType;
  dataAtualizacao?: Date;

  constructor(props: Cultura) {
    this.id = props.id;
    this.nome = props.nome;
    this.pesoSaca = props.pesoSaca;
    this.idUnidade = props.idUnidade;
    this.ncm = props.ncm;
    this.cultura = props.cultura;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}

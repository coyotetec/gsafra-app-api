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

  constructor(props: Cultura) {
    this.id = props.id;
    this.nome = props.nome;
    this.pesoSaca = props.pesoSaca;
    this.idUnidade = props.idUnidade;
    this.ncm = props.ncm;
    this.cultura = props.cultura;
  }
}

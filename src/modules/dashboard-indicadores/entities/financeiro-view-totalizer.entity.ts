enum FormatoType {
  MOEDA = 1,
  PORCENTAGEM = 2,
  NUMERICO = 3,
}

export class FinanceiroViewTotalizer {
  id: number;
  idFinanceiroViewM: number;
  totalizadorNome: string;
  formula: string;
  formato?: FormatoType;

  constructor(props: FinanceiroViewTotalizer) {
    this.id = props.id;
    this.idFinanceiroViewM = props.idFinanceiroViewM;
    this.totalizadorNome = props.totalizadorNome;
    this.formula = props.formula;
    this.formato = props.formato;
  }
}

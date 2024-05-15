enum FinanceiroViewColumnBoolType {
  FALSO,
  VERDADEIRO,
}

export class FinanceiroViewColumn {
  id: number;
  idFinanceiroViewM: number;
  nome: string;
  apropriacaoCusto1: FinanceiroViewColumnBoolType;
  apropriacaoCusto2: FinanceiroViewColumnBoolType;
  apropriacaoCusto3: FinanceiroViewColumnBoolType;
  apropriacaoCusto4: FinanceiroViewColumnBoolType;
  apropriacaoCusto44: FinanceiroViewColumnBoolType;
  filtrarPlanoConta: FinanceiroViewColumnBoolType;
  filtrarCentroCusto: FinanceiroViewColumnBoolType;
  filtrarSafra: FinanceiroViewColumnBoolType;
  filtrarPatrimonio: FinanceiroViewColumnBoolType;
  filtrarEmpresa: FinanceiroViewColumnBoolType;
  filtrarPessoa: FinanceiroViewColumnBoolType;
  visivel?: FinanceiroViewColumnBoolType;

  constructor(props: FinanceiroViewColumn) {
    this.id = props.id;
    this.idFinanceiroViewM = props.idFinanceiroViewM;
    this.nome = props.nome;
    this.apropriacaoCusto1 = props.apropriacaoCusto1;
    this.apropriacaoCusto2 = props.apropriacaoCusto2;
    this.apropriacaoCusto3 = props.apropriacaoCusto3;
    this.apropriacaoCusto4 = props.apropriacaoCusto4;
    this.apropriacaoCusto44 = props.apropriacaoCusto44;
    this.filtrarPlanoConta = props.filtrarPlanoConta;
    this.filtrarCentroCusto = props.filtrarCentroCusto;
    this.filtrarSafra = props.filtrarSafra;
    this.filtrarPatrimonio = props.filtrarPatrimonio;
    this.filtrarEmpresa = props.filtrarEmpresa;
    this.filtrarPessoa = props.filtrarPessoa;
    this.visivel = props.visivel;
  }
}

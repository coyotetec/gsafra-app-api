export class Fornecedor {
  id: number;
  nomeFantasia: string;
  cpfCnpj: string;

  constructor(props: Fornecedor) {
    this.id = props.id;
    this.nomeFantasia = props.nomeFantasia;
    this.cpfCnpj = props.cpfCnpj;
  }
}

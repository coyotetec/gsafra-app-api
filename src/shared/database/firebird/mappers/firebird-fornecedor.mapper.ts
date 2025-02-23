import { Fornecedor } from 'src/modules/fornecedor/entities/fornecedor.entity';
interface FirebirdFornecedor {
  ID: number;
  CPF_CNPJ: string;
  NOME_FANTASIA: string;
}
export class FirebirdFornecedorMapper {
  static toDomain(
    raw: FirebirdFornecedor,
  ): Fornecedor {
    return new Fornecedor({
      id: raw.ID,
      cpfCnpj: raw.CPF_CNPJ,
      nomeFantasia: raw.NOME_FANTASIA
    });
  }
}

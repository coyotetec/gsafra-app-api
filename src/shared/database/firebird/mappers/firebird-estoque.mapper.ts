import { Estoque } from 'src/modules/estoque/entities/estoque.entity';

interface FirebirdManutencao {
  ID: number;
  ESTOQUEATUAL: number;
  PRECOVENDA: number;
  NOME: string;
  CUSTOMEDIO: number
  CUSTOATUAL: number
  UNIDADE: string
  SIGLE: string
  ID_PRODUTO_ALMOXARIFADO: number
  ID_ALMOXARIFADO: number
  ID_UNIDADE: number
}

export class FirebirdEstoqueMapper {
  static toDomain(
    raw: FirebirdManutencao,
  ): Estoque {
    return new Estoque({
      id: raw.ID,
      estoqueAtual: raw.ESTOQUEATUAL,
      precoVenda: raw.PRECOVENDA,
      nome: raw.NOME,
      custoAtual: raw.CUSTOATUAL,
      custoMedio: raw.CUSTOMEDIO,
      unidade: raw.UNIDADE,
      sigla: raw.SIGLE,
      idProdutoAlmoxarifado: raw.ID_PRODUTO_ALMOXARIFADO,
      idUnidade: raw.ID_UNIDADE,
      idAlmoxarifado: raw.ID_ALMOXARIFADO,
    });
  }
}

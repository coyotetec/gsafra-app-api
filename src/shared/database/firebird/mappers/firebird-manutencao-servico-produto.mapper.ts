import { ManutencaoServicoProduto } from 'src/modules/manutencao-servico-produto/entities/manutencao.entity';
interface FirebirdManutencaoServicoProduto {
  ID: number;
  ID_MANUTENCAO_SERVICO: number;
  ID_PRODUTO_ALMOXARIFADO: number;
  ID_ALMOXARIFADO: number;
  ID_UNIDADE: number;
  QTDE: number;
  TOTAL: number;
  CUSTO_MEDIO: number
  CUSTO_ANUAL: number
  ESTOQUE_MOVIMENTADO: number
}
export class FirebirdServiceProdutoMapper {
  static toDomain(
    raw: FirebirdManutencaoServicoProduto,
  ): ManutencaoServicoProduto {
    return new ManutencaoServicoProduto({
      id: raw.ID,
      custoAnual: raw.CUSTO_ANUAL,
      custoMedio: raw.CUSTO_MEDIO,
      estoqueMovimentado: raw.ESTOQUE_MOVIMENTADO,
      idAlmoxarifado: raw.ID_ALMOXARIFADO,
      idManutencaoServico: raw.ID_MANUTENCAO_SERVICO,
      idUnidade: raw.ID_UNIDADE,
      qtde: raw.QTDE,
      total: raw.TOTAL,
      idProdutoAlmoxarifado: raw.ID_PRODUTO_ALMOXARIFADO
    });
  }
}

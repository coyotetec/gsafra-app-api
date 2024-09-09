import { CreatedAbastecimento } from 'src/modules/abastecimentos/entities/created-abastecimento.entity';
import { RequisicaoProduto } from 'src/modules/requisicao-produto/entities/requisicao.entity';

interface FirebirdRequisicaoProduto {
  ID: number;
  ID_REQUISICAO_ALMOXARIFADO_M: number;
  ID_PRODUTO_ALMOXARIFADO: number;
  DESCRICAO_PRODUTO_SEM_CADASTRO: string;
  UND: string;
  DATA_HORA_ATUAL_INCLUSAO: string;
  DATA_HORA_ATUAL_EDICAO: string;
  QUANTIDADE: number;
  PRECO_ATUAL: number;
  CUSTO_MEDIO_ATUAL: number;
  OBSERVACOES: string;
}

export class FirebirdRequisicaoProdutoMapper {
  static toDomain(raw: FirebirdRequisicaoProduto): RequisicaoProduto {
    return new RequisicaoProduto({
      idRequisicaoAlmoxarifadoM: raw.ID_REQUISICAO_ALMOXARIFADO_M,
      idProdutoAlmoxarifado: raw.ID_PRODUTO_ALMOXARIFADO,
      descricaoProdutoSemCadastro: raw.DESCRICAO_PRODUTO_SEM_CADASTRO,
      und: raw.UND,
      dataHoraAtualInclusao: raw.DATA_HORA_ATUAL_INCLUSAO,
      dataHoraAtualEdicao: raw.DATA_HORA_ATUAL_EDICAO,
      quantidade: raw.QUANTIDADE,
      precoAtual: raw.PRECO_ATUAL,
      custoMedioAtual: raw.CUSTO_MEDIO_ATUAL,
      observacoes: raw.OBSERVACOES,
    });
  }

  static toCreatedDomain(raw: FirebirdRequisicaoProduto): CreatedAbastecimento {
    return null;
  }
}

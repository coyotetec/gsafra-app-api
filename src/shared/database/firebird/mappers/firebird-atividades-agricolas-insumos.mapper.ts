import { AtividadeAgricolaInsumo } from 'src/modules/atividades-agricolas-insumos/entities/atividade-agricola-insumo.entity';
import { CreatedAtividadeAgricolaInsumo } from 'src/modules/atividades-agricolas-insumos/entities/created-atividade-agricola-insumo.entity';

interface FirebirdAtividadeAgricolaInsumo {
  ID: number;
  ID_AGRI_ATV: number;
  ID_ALMOXARIFADO: number;
  ID_FICHA_APL_BOMBA_PRODUTO: number;
  ID_PLAN_ATV_INSUMO: number;
  ID_PRODUTO_ALMOXARIFADO: number;
  ID_UNIDADE: number;
  CUSTO_ATUAL: number;
  CUSTO_MEDIO: number;
  ESTOQUE_MOVIMENTADO: number;
  QTDE: number;
  DATA_ATUALIZACAO?: Date;
}

interface FirebirdCreatedAtividadeAgricolaInsumo {
  ID: number;
}

export class FirebirdAtividadesAgricolasInsumosMapper {
  static toDomain(
    raw: FirebirdAtividadeAgricolaInsumo,
  ): AtividadeAgricolaInsumo {
    return new AtividadeAgricolaInsumo({
      id: raw.ID,
      idAgriAtv: raw.ID_AGRI_ATV,
      idAlmoxarifado: raw.ID_ALMOXARIFADO,
      idFichaAplBombaProduto: raw.ID_FICHA_APL_BOMBA_PRODUTO,
      idPlanAtvInsumo: raw.ID_PLAN_ATV_INSUMO,
      idProdutoAlmoxarifado: raw.ID_PRODUTO_ALMOXARIFADO,
      idUnidade: raw.ID_UNIDADE,
      custoAtual: raw.CUSTO_ATUAL,
      custoMedio: raw.CUSTO_MEDIO,
      estoqueMovimentado: raw.ESTOQUE_MOVIMENTADO,
      qtde: raw.QTDE,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }

  static toCreateDomain(
    raw: FirebirdCreatedAtividadeAgricolaInsumo,
  ): CreatedAtividadeAgricolaInsumo {
    return new CreatedAtividadeAgricolaInsumo({
      id: raw.ID,
    });
  }
}

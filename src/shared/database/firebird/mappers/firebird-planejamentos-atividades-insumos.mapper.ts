import { PlanejamentoAtividadeInsumo } from 'src/modules/planejamentos-atividades-insumos/entities/planejamento-atividade-insumo.entity';

interface FirebirdPlanejamentoAtividadeInsumo {
  ID: number;
  ID_PLAN_ATV: number;
  ID_PRODUTO_ALMOXARIFADO: number;
  ID_UNIDADE: number;
  QTDE: number;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdPlanejamentosAtividadesInsumosMapper {
  static toDomain(
    raw: FirebirdPlanejamentoAtividadeInsumo,
  ): PlanejamentoAtividadeInsumo {
    return new PlanejamentoAtividadeInsumo({
      id: raw.ID,
      idPlanAtv: raw.ID_PLAN_ATV,
      idProdutoAlmoxarifado: raw.ID_PRODUTO_ALMOXARIFADO,
      idUnidade: raw.ID_UNIDADE,
      qtde: raw.QTDE,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

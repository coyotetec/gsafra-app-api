import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { AtividadesAgricolasInsumosRepository } from 'src/modules/atividades-agricolas-insumos/atividades-agricolas-insumos.repository';
import { AtividadeAgricolaInsumo } from 'src/modules/atividades-agricolas-insumos/entities/atividade-agricola-insumo.entity';
import { FirebirdAtividadesAgricolasInsumosMapper } from '../mappers/firebird-atividades-agricolas-insumos.mapper';

@Injectable()
export class FirebirdAtividadesAgricolasInsumosRepository
  implements AtividadesAgricolasInsumosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AtividadeAgricolaInsumo>(
      host,
      code,
      'SELECT * FROM agri_atv_insumo',
      FirebirdAtividadesAgricolasInsumosMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    atividadeAgricolaInsumo: AtividadeAgricolaInsumo,
  ) {
    const {
      idAgriAtv,
      idAlmoxarifado,
      idFichaAplBombaProduto,
      idPlanAtvInsumo,
      idProdutoAlmoxarifado,
      idUnidade,
      custoAtual,
      custoMedio,
      estoqueMovimentado,
      qtde,
    } = atividadeAgricolaInsumo;

    await this.firebird.query(
      host,
      code,
      `INSERT INTO AGRI_ATV_INSUMO (ID, ID_AGRI_ATV, ID_ALMOXARIFADO, ID_FICHA_APL_BOMBA_PRODUTO, ID_PLAN_ATV_INSUMO, ID_PRODUTO_ALMOXARIFADO, ID_UNIDADE, CUSTO_ATUAL, CUSTO_MEDIO, ESTOQUE_MOVIMENTADO, QTDE) VALUES (GEN_ID(GEN_AGRI_ATV_INSUMO, 1), ${idAgriAtv}, ${idAlmoxarifado}, ${idFichaAplBombaProduto || null}, ${idPlanAtvInsumo || null}, ${idProdutoAlmoxarifado}, ${idUnidade}, ${custoAtual}, ${custoMedio}, ${estoqueMovimentado}, ${qtde})`,
    );
  }
}

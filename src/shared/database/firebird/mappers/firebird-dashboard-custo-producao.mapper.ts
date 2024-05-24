import { CustoProducaoCategory } from 'src/modules/dashboard-custo-producao/entities/custo-producao-category.entity';
import { CustoProducaoPlot } from 'src/modules/dashboard-custo-producao/entities/custo-producao-plot.entity';
import { fixedNumber } from 'src/shared/utils/fixedNumber';

interface FirebirdCustoProducaoCategory {
  TOTAL: number;
  CATEGORIA: string;
}

interface FirebirdCustoProducaoPlot {
  TOTAL: number;
  TALHAO: string;
  VARIEDADE: string;
  AREA: number;
  SAFRA: string;
}

export class FirebirdDashboardCustoProducaoMapper {
  static toCategoryDomain(
    raw: FirebirdCustoProducaoCategory,
  ): CustoProducaoCategory {
    return new CustoProducaoCategory({
      total: raw.TOTAL,
      category: raw.CATEGORIA.trim(),
    });
  }

  static toPlotDomain(raw: FirebirdCustoProducaoPlot): CustoProducaoPlot {
    return new CustoProducaoPlot({
      total: raw.TOTAL,
      hectareTotal: fixedNumber(raw.TOTAL / raw.AREA, 2),
      harvest: raw.SAFRA.trim(),
      plot: raw.TALHAO.trim(),
      variety: raw.VARIEDADE.trim(),
      plotVariety: `${raw.TALHAO.trim()} (${raw.VARIEDADE.trim()})`,
      area: raw.AREA,
    });
  }
}

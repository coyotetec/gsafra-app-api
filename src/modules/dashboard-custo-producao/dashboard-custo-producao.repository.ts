import { FindCategoryTotalDto } from './dto/find-category-total.dto';
import { FindPlotTotalDto } from './dto/find-plot-total.dto';
import { CustoProducaoCategory } from './entities/custo-producao-category.entity';
import { CustoProducaoPlot } from './entities/custo-producao-plot.entity';

export abstract class DashboardCustoProducaoRepository {
  abstract findCustoCategory(
    host: string,
    code: string,
    filters: FindCategoryTotalDto,
  ): Promise<CustoProducaoCategory[]>;

  abstract findCustoPlot(
    host: string,
    code: string,
    filters: FindPlotTotalDto,
  ): Promise<CustoProducaoPlot[]>;
}

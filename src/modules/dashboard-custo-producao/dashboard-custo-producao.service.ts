import { Injectable } from '@nestjs/common';
import { FindCategoryTotalDto } from './dto/find-category-total.dto';
import { DashboardCustoProducaoRepository } from './dashboard-custo-producao.repository';
import { TalhoesSafrasRepository } from '../talhoes-safras/talhoes-safras.repository';
import { fixedNumber } from 'src/shared/utils/fixedNumber';
import { FindPlotTotalDto } from './dto/find-plot-total.dto';

@Injectable()
export class DashboardCustoProducaoService {
  constructor(
    private dashboardCustoProducaoRepository: DashboardCustoProducaoRepository,
    private talhoesSafraRepository: TalhoesSafrasRepository,
  ) {}

  async findCategoryTotal(
    host: string,
    code: string,
    findCategoryTotalDto: FindCategoryTotalDto,
  ) {
    const [categoryTotal, areaTotal] = await Promise.all([
      this.dashboardCustoProducaoRepository.findCustoCategory(
        host,
        code,
        findCategoryTotalDto,
      ),
      this.talhoesSafraRepository.findArea(
        host,
        code,
        findCategoryTotalDto.harvestId,
      ),
    ]);

    const custoTotal = fixedNumber(
      categoryTotal.reduce((acc, curr) => acc + curr.total, 0),
      2,
    );
    const hectareTotal = fixedNumber(custoTotal / areaTotal, 2);
    const custoCategoryTotal = categoryTotal.map((categoryItem) => ({
      total: categoryItem.total,
      category: categoryItem.category,
      hectareTotal: fixedNumber(categoryItem.total / areaTotal, 2),
      percentage: fixedNumber((categoryItem.total * 100) / custoTotal, 2),
    }));

    return { custoTotal, hectareTotal, custoCategoryTotal };
  }

  async findPlotTotal(
    host: string,
    code: string,
    findPlotTotalDto: FindPlotTotalDto,
  ) {
    const [plotTotal, areaTotal] = await Promise.all([
      this.dashboardCustoProducaoRepository.findCustoPlot(
        host,
        code,
        findPlotTotalDto,
      ),
      this.talhoesSafraRepository.findArea(
        host,
        code,
        findPlotTotalDto.harvestId,
      ),
    ]);

    const custoTotal = fixedNumber(
      plotTotal.reduce((acc, curr) => acc + curr.total, 0),
      2,
    );
    const hectareTotal = fixedNumber(custoTotal / areaTotal, 2);
    const custoPlotTotal = plotTotal.map((plotItem) => ({
      total: plotItem.total,
      hectareTotal: plotItem.hectareTotal,
      area: plotItem.area,
      harvest: plotItem.harvest,
      plot: plotItem.plot,
      variety: plotItem.variety,
      plotVariety: plotItem.plotVariety,
      percentage: fixedNumber((plotItem.total * 100) / custoTotal, 2),
    }));

    return { custoTotal, hectareTotal, custoPlotTotal };
  }
}

import { Injectable } from '@nestjs/common';
import { DashboardIndicadoresRepository } from './dashboard-indicadores.repository';
import { FinanceiroViewColumnData } from './entities/financeiro-view-column-data.entity';
import { executeFomula } from 'src/shared/utils/executeFormula';
import { FinanceiroViewTotalizerData } from './entities/financeiro-view-totalizer-data.entity';
import { FindViewDataDto } from './dto/find-view-data.dto';

@Injectable()
export class DashboardIndicadoresService {
  constructor(
    private dashboardIndicadoresRepository: DashboardIndicadoresRepository,
  ) {}

  findViews(host: string, code: string) {
    return this.dashboardIndicadoresRepository.findMany(host, code);
  }

  async findViewData(
    host: string,
    code: string,
    id: number,
    findViewDataDto: FindViewDataDto,
  ) {
    const viewColumns =
      await this.dashboardIndicadoresRepository.findViewColumns(host, code, id);
    const viewTotalizers =
      await this.dashboardIndicadoresRepository.findViewTotalizers(
        host,
        code,
        id,
      );

    const viewColumnsData: FinanceiroViewColumnData[] = [];
    const viewTotalizersData: FinanceiroViewTotalizerData[] = [];

    for (const viewColumn of viewColumns) {
      const columnTotal =
        await this.dashboardIndicadoresRepository.findColumnTotal(
          host,
          code,
          viewColumn,
          findViewDataDto,
        );

      viewColumnsData.push(
        new FinanceiroViewColumnData({
          id: viewColumn.id,
          name: viewColumn.nome,
          total: columnTotal,
          absoluteTotal: Math.abs(columnTotal),
          visible: viewColumn.visivel === 1,
        }),
      );
    }

    for (const viewTotalizer of viewTotalizers) {
      let formula = viewTotalizer.formula;

      viewColumnsData.forEach((columnData) => {
        const regex = new RegExp(`\\[${columnData.id}\\]`, 'g');

        formula = formula.replace(regex, String(columnData.total));
      });

      const result = executeFomula(formula);

      if (['Infinity', '-Infinity', 'NaN'].includes(result)) {
        viewTotalizersData.push({
          id: viewTotalizer.id,
          name: viewTotalizer.totalizadorNome,
          error: 'Erro na fórmula.',
        });
        continue;
      }

      viewTotalizersData.push({
        id: viewTotalizer.id,
        name: viewTotalizer.totalizadorNome,
        total: parseFloat(result),
        format: viewTotalizer.formato,
      });
    }

    return { columns: viewColumnsData, totalizers: viewTotalizersData };
  }
}

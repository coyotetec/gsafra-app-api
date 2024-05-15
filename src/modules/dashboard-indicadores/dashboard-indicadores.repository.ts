import { FindViewDataDto } from './dto/find-view-data.dto';
import { FinanceiroViewColumn } from './entities/financeiro-view-column.entity';
import { FinanceiroViewTotalizer } from './entities/financeiro-view-totalizer.entity';
import { FinanceiroView } from './entities/financeiro-view.entity';

export abstract class DashboardIndicadoresRepository {
  abstract findMany(host: string, code: string): Promise<FinanceiroView[]>;

  abstract findViewColumns(
    host: string,
    code: string,
    viewId: number,
  ): Promise<FinanceiroViewColumn[]>;

  abstract findViewTotalizers(
    host: string,
    code: string,
    viewId: number,
  ): Promise<FinanceiroViewTotalizer[]>;

  abstract findColumnTotal(
    host: string,
    code: string,
    financeiroViewColumn: FinanceiroViewColumn,
    filters: FindViewDataDto,
  ): Promise<number>;
}

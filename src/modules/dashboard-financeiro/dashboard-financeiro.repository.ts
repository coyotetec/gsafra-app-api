import { TotallizersFiltersDto } from './dto/totalizers-filters.dto';
import { DashboardFinanceiroTotal } from './entities/dashboard-financeiro-total.entity';

export abstract class DashboardFinanceiroRepository {
  abstract financialTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ): Promise<DashboardFinanceiroTotal>;

  abstract financialHarvestTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ): Promise<DashboardFinanceiroTotal>;

  abstract checksTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ): Promise<DashboardFinanceiroTotal>;

  abstract checksHarvestTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ): Promise<DashboardFinanceiroTotal>;
}

import { DashboardFinanceiroTotal } from 'src/modules/dashboard-financeiro/entities/dashboard-financeiro-total.entity';

interface FirebirdDashboardFinanceiroTotal {
  QUANTIDADE: number;
  TOTAL: number;
}

export class FirebirdDashboardFinanceiroMapper {
  static toTotalDomain(
    raw: FirebirdDashboardFinanceiroTotal,
  ): DashboardFinanceiroTotal {
    return new DashboardFinanceiroTotal({
      quantity: raw.QUANTIDADE,
      total: raw.TOTAL,
    });
  }
}

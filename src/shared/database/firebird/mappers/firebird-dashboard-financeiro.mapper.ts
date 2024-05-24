import { DashboardFinanceiroCardLimit } from 'src/modules/dashboard-financeiro/entities/dashboard-financeiro-card-limit.entity';
import { DashboardFinanceiroTotal } from 'src/modules/dashboard-financeiro/entities/dashboard-financeiro-total.entity';

interface FirebirdDashboardFinanceiroTotal {
  QUANTIDADE: number;
  TOTAL: number;
}

interface FirebirdDashboardFinanceiroCardLimit {
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

  static toCardLimitDomain(
    raw: FirebirdDashboardFinanceiroCardLimit,
  ): DashboardFinanceiroCardLimit {
    return new DashboardFinanceiroCardLimit({
      total: raw.TOTAL,
    });
  }
}

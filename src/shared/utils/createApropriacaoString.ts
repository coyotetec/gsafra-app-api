import { FinanceiroViewColumn } from 'src/modules/dashboard-indicadores/entities/financeiro-view-column.entity';

export function createApropriacaoString(
  financeiroViewColumn: FinanceiroViewColumn,
) {
  const apropriacaoArray = [];

  if (financeiroViewColumn.apropriacaoCusto1) {
    apropriacaoArray.push(1);
  }

  if (financeiroViewColumn.apropriacaoCusto2) {
    apropriacaoArray.push(2);
  }

  if (financeiroViewColumn.apropriacaoCusto3) {
    apropriacaoArray.push(3);
  }

  if (financeiroViewColumn.apropriacaoCusto4) {
    apropriacaoArray.push(4);
  }

  if (financeiroViewColumn.apropriacaoCusto44) {
    apropriacaoArray.push(44);
  }

  return apropriacaoArray.join(', ');
}

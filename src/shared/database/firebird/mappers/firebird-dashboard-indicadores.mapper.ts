import { FinanceiroViewColumnTotal } from 'src/modules/dashboard-indicadores/entities/financeiro-view-column-total.entity';
import { FinanceiroViewColumn } from 'src/modules/dashboard-indicadores/entities/financeiro-view-column.entity';
import { FinanceiroViewTotalizer } from 'src/modules/dashboard-indicadores/entities/financeiro-view-totalizer.entity';
import { FinanceiroView } from 'src/modules/dashboard-indicadores/entities/financeiro-view.entity';

interface FirebirdFinanceiroView {
  ID: number;
  NOME: string;
  SITUACAO: number;
  PERIODO_PADRAO_MESES?: number;
}

interface FirebirdFinanceiroViewColumn {
  ID: number;
  ID_FINANCEIRO_VIEW_M: number;
  NOME: string;
  APROPRIACAO_CUSTO_1: number;
  APROPRIACAO_CUSTO_2: number;
  APROPRIACAO_CUSTO_3: number;
  APROPRIACAO_CUSTO_4: number;
  APROPRIACAO_CUSTO_44: number;
  FILTRAR_PLANO_CONTA: number;
  FILTRAR_CENTRO_CUSTO: number;
  FILTRAR_SAFRA: number;
  FILTRAR_PATRIMONIO: number;
  FILTRAR_EMPRESA: number;
  FILTRAR_PESSOA: number;
  VISIVEL?: number;
}

interface FirebirdFinanceiroViewTotalizer {
  ID: number;
  ID_FINANCEIRO_VIEW_M: number;
  TOTALIZADOR_NOME: string;
  FORMULA: string;
  FORMATO?: number;
}

interface FirebirdFinanceiroViewColumnTotal {
  TOTAL: number;
}

export class FirebirdDashboardIndicadoresMapper {
  static toDomain(raw: FirebirdFinanceiroView): FinanceiroView {
    return new FinanceiroView({
      id: raw.ID,
      nome: raw.NOME,
      situacao: raw.SITUACAO,
      periodoPadraoMeses: raw.PERIODO_PADRAO_MESES,
    });
  }

  static toColumnDomain(
    raw: FirebirdFinanceiroViewColumn,
  ): FinanceiroViewColumn {
    return new FinanceiroViewColumn({
      id: raw.ID,
      idFinanceiroViewM: raw.ID_FINANCEIRO_VIEW_M,
      nome: raw.NOME,
      apropriacaoCusto1: raw.APROPRIACAO_CUSTO_1,
      apropriacaoCusto2: raw.APROPRIACAO_CUSTO_2,
      apropriacaoCusto3: raw.APROPRIACAO_CUSTO_3,
      apropriacaoCusto4: raw.APROPRIACAO_CUSTO_4,
      apropriacaoCusto44: raw.APROPRIACAO_CUSTO_44,
      filtrarPlanoConta: raw.FILTRAR_PLANO_CONTA,
      filtrarCentroCusto: raw.FILTRAR_CENTRO_CUSTO,
      filtrarSafra: raw.FILTRAR_SAFRA,
      filtrarPatrimonio: raw.FILTRAR_PATRIMONIO,
      filtrarEmpresa: raw.FILTRAR_EMPRESA,
      filtrarPessoa: raw.FILTRAR_PESSOA,
      visivel: raw.VISIVEL,
    });
  }

  static toTotalizerDomain(
    raw: FirebirdFinanceiroViewTotalizer,
  ): FinanceiroViewTotalizer {
    return new FinanceiroViewTotalizer({
      id: raw.ID,
      idFinanceiroViewM: raw.ID_FINANCEIRO_VIEW_M,
      totalizadorNome: raw.TOTALIZADOR_NOME,
      formula: raw.FORMULA,
      formato: raw.FORMATO,
    });
  }

  static toColumnTotalDomain(raw: FirebirdFinanceiroViewColumnTotal) {
    return new FinanceiroViewColumnTotal({
      total: raw.TOTAL,
    });
  }
}

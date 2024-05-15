import { DashboardIndicadoresRepository } from 'src/modules/dashboard-indicadores/dashboard-indicadores.repository';
import { FinanceiroView } from 'src/modules/dashboard-indicadores/entities/financeiro-view.entity';
import { FirebirdService } from '../firebird.service';
import { FirebirdDashboardIndicadoresMapper } from '../mappers/firebird-dashboard-indicadores.mapper';
import { Injectable } from '@nestjs/common';
import { FinanceiroViewColumn } from 'src/modules/dashboard-indicadores/entities/financeiro-view-column.entity';
import { FinanceiroViewColumnTotal } from 'src/modules/dashboard-indicadores/entities/financeiro-view-column-total.entity';
import { createApropriacaoString } from 'src/shared/utils/createApropriacaoString';
import { FinanceiroViewTotalizer } from 'src/modules/dashboard-indicadores/entities/financeiro-view-totalizer.entity';
import { FindViewDataDto } from 'src/modules/dashboard-indicadores/dto/find-view-data.dto';
import { format } from 'date-fns';

@Injectable()
export class FirebirdDashboardIndicadoresRepository
  implements DashboardIndicadoresRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<FinanceiroView>(
      host,
      code,
      `SELECT * FROM FINANCEIRO_VIEW_M fvm 
      WHERE fvm.SITUACAO = 1`,
      FirebirdDashboardIndicadoresMapper.toDomain,
    );
  }

  findViewColumns(host: string, code: string, viewId: number) {
    return this.firebird.query<FinanceiroViewColumn>(
      host,
      code,
      `SELECT * FROM FINANCEIRO_VIEW_D fvd 
      WHERE fvd.ID_FINANCEIRO_VIEW_M = ${viewId}`,
      FirebirdDashboardIndicadoresMapper.toColumnDomain,
    );
  }

  findViewTotalizers(host: string, code: string, viewId: number) {
    return this.firebird.query<FinanceiroViewTotalizer>(
      host,
      code,
      `SELECT * FROM FINANCEIRO_VIEW_TOTALIZADOR fvt
      WHERE fvt.ID_FINANCEIRO_VIEW_M = ${viewId}`,
      FirebirdDashboardIndicadoresMapper.toTotalizerDomain,
    );
  }

  async findColumnTotal(
    host: string,
    code: string,
    financeiroViewColumn: FinanceiroViewColumn,
    filters: FindViewDataDto,
  ) {
    const { startDate, endDate } = filters;

    return (
      await this.firebird.query<FinanceiroViewColumnTotal>(
        host,
        code,
        /* eslint-disable prettier/prettier */
      `${financeiroViewColumn.filtrarSafra ? `
      SELECT
        COALESCE(SUM(
          CASE WHEN mcm.TIPO_LANCAMENTO = 'D'
          THEN(mcc.VALOR * -1)
          ELSE(mcc.VALOR) END
        ), 0) AS TOTAL
      FROM MOVIMENTO_CONTA_APROPRIACAO mca
      INNER JOIN MOVIMENTO_CONTA_CICLO mcc ON mcc.ID_MOVIMENTO_CONTA_APROPRIACAO = mca.id
      `: `
      SELECT
        COALESCE(SUM(
          CASE WHEN mcm.TIPO_LANCAMENTO = 'D'
          THEN(mca.VALOR * -1)
          ELSE(mca.VALOR) END
        ), 0) AS TOTAL
      FROM MOVIMENTO_CONTA_APROPRIACAO mca 
      `}
      INNER JOIN MOVIMENTO_CONTA mc ON mc.ID = mca.ID_MOVIMENTO_CONTA 
      INNER JOIN MOVIMENTO_CONTA_M mcm ON mcm.ID = mc.ID_MOVIMENTO_CONTA_M 
      WHERE mcm.COMPENSADO = 'S'
      ${startDate ? `AND mcm.DATA_COMPENSACAO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND mcm.DATA_COMPENSACAO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
      AND mca.APROPRIACAO_CUSTO IN (${createApropriacaoString(financeiroViewColumn)})
      ${financeiroViewColumn.filtrarPlanoConta ? `
      AND mca.ID_PLANO_CONTA IN (SELECT fvdp.ID_PLANO_CONTA FROM FINANCEIRO_VIEW_D_PC fvdp WHERE fvdp.ID_FINANCEIRO_VIEW_D = ${financeiroViewColumn.id})
      ` : ''}
      ${financeiroViewColumn.filtrarCentroCusto ? `
      AND mca.ID_CENTRO_CUSTO IN (SELECT fvdc.ID_CENTRO_CUSTO FROM FINANCEIRO_VIEW_D_CC fvdc WHERE fvdc.ID_FINANCEIRO_VIEW_D = ${financeiroViewColumn.id})
      ` : ''}
      ${financeiroViewColumn.filtrarPatrimonio ? `
      AND mca.ID_PATRIMONIO IN (SELECT fvdp.ID_PATRIMONIO FROM FINANCEIRO_VIEW_D_PATRIMONIO fvdp WHERE fvdp.ID_FINANCEIRO_VIEW_D = ${financeiroViewColumn.id})
      ` : ''}
      ${financeiroViewColumn.filtrarEmpresa ? `
      AND mca.ID_EMPRESA IN (SELECT fvde.ID_EMPRESA FROM FINANCEIRO_VIEW_D_EMPRESA fvde WHERE fvde.ID_FINANCEIRO_VIEW_D = ${financeiroViewColumn.id})
      ` : ''}
      ${financeiroViewColumn.filtrarPessoa ? `
      AND mc.ID_PESSOA IN (SELECT fvdp.ID_PESSOA FROM FINANCEIRO_VIEW_D_PESSOA fvdp WHERE fvdp.ID_FINANCEIRO_VIEW_D = ${financeiroViewColumn.id}),
      ` : ''}
      ${financeiroViewColumn.filtrarSafra ? `
      AND mcc.ID_CICLO_PRODUCAO IN (SELECT fvdc.ID_CICLO_PRODUCAO FROM FINANCEIRO_VIEW_D_CICLO fvdc WHERE fvdc.ID_FINANCEIRO_VIEW_D = ${financeiroViewColumn.id})
      `: ''}`,
      /* eslint-enable prettier/prettier */
        FirebirdDashboardIndicadoresMapper.toColumnTotalDomain,
      )
    )[0].total;
  }
}

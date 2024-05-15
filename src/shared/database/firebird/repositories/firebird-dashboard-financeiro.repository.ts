import { Injectable } from '@nestjs/common';
import { DashboardFinanceiroRepository } from 'src/modules/dashboard-financeiro/dashboard-financeiro.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdDashboardFinanceiroMapper } from '../mappers/firebird-dashboard-financeiro.mapper';
import { DashboardFinanceiroTotal } from 'src/modules/dashboard-financeiro/entities/dashboard-financeiro-total.entity';
import { TotallizersFiltersDto } from 'src/modules/dashboard-financeiro/dto/totalizers-filters.dto';
import { format } from 'date-fns';

@Injectable()
export class FirebirdDashboardFinanceiroRepository
  implements DashboardFinanceiroRepository
{
  constructor(private firebird: FirebirdService) {}

  async financialTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ) {
    const { type, startDate, endDate } = filters;

    return (
      await this.firebird.query<DashboardFinanceiroTotal>(
        host,
        code,
        `SELECT
        COUNT(crp.ID) AS QUANTIDADE, 
        CAST(COALESCE(SUM(
          crp.VALOR_PARCELA -
          crp.TOTAL_PAGO +
          crp.TOTAL_MULTA +
          crp.TOTAL_JUROS -
          crp.TOTAL_DESCONTO
        ), 0) AS NUMERIC(15, 2)) AS TOTAL
        FROM CONTA_RECEBER_PAGAR crp 
        INNER JOIN CRP_M cm ON cm.ID = crp.ID_CRP_M 
        WHERE cm.TIPO = ${type}
        AND cm.TIPO_LANCTO_FINANCEIRO = 1
        AND crp.SITUACAO = 'A'
        ${startDate ? `AND crp.DATA_VENCIMENTO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND crp.DATA_VENCIMENTO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}`,
        FirebirdDashboardFinanceiroMapper.toTotalDomain,
      )
    )[0];
  }

  async financialHarvestTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ) {
    const { type, startDate, endDate, harvestId } = filters;

    return (
      await this.firebird.query<DashboardFinanceiroTotal>(
        host,
        code,
        `SELECT 
        COUNT(crp.ID) AS QUANTIDADE, 
        CAST(COALESCE(SUM(
          (
            crp.VALOR_PARCELA -
            crp.TOTAL_PAGO +
            crp.TOTAL_MULTA +
            crp.TOTAL_JUROS -
            crp.TOTAL_DESCONTO
          ) *
          (((ca.VALOR * 100) / crp.VALOR_PARCELA) / 100) *
          (CAST(crpc.PROPORCAO AS NUMERIC(15,5)) / 100)
        ), 0) AS NUMERIC(15, 2)) AS TOTAL
      FROM CONTA_RECEBER_PAGAR_CICLO crpc
      RIGHT JOIN CRP_APROPRIACAO ca ON ca.ID = crpc.ID_CRP_APROPRIACAO
      RIGHT JOIN CONTA_RECEBER_PAGAR crp ON crp.ID = ca.ID_CONTA_RECEBER_PAGAR
      INNER JOIN CRP_M cm ON cm.ID = crp.ID_CRP_M
      WHERE cm.TIPO = ${type}
      AND cm.TIPO_LANCTO_FINANCEIRO = 1
      AND crp.SITUACAO = 'A'
      AND crpc.ID_CICLO_PRODUCAO = ${harvestId}
      ${startDate ? `AND crp.DATA_VENCIMENTO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND crp.DATA_VENCIMENTO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}`,
        FirebirdDashboardFinanceiroMapper.toTotalDomain,
      )
    )[0];
  }

  async checksTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ) {
    const { type, startDate, endDate } = filters;

    return (
      await this.firebird.query<DashboardFinanceiroTotal>(
        host,
        code,
        `SELECT
          COUNT(c.ID) AS QUANTIDADE,
          COALESCE(SUM(c.VALOR), 0) AS TOTAL 
        FROM CHEQUE c 
        WHERE c.TIPO = '${type === 1 ? 'R' : 'E'}'
        AND c.SITUACAO = 'A'
        ${startDate ? `AND c.DATA_VENCIMENTO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND c.DATA_VENCIMENTO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}`,
        FirebirdDashboardFinanceiroMapper.toTotalDomain,
      )
    )[0];
  }

  async checksHarvestTotal(
    host: string,
    code: string,
    filters: TotallizersFiltersDto,
  ) {
    const { type, startDate, endDate, harvestId } = filters;

    return (
      await this.firebird.query<DashboardFinanceiroTotal>(
        host,
        code,
        `SELECT
          COUNT(c.ID) AS QUANTIDADE,
          CAST(COALESCE(SUM(
            c.VALOR *
            (((ca.VALOR * 100) / c.VALOR) / 100) *
            (cc.PROPORCAO / 100)
          ), 0) AS NUMERIC(15,2)) AS TOTAL
        FROM CHEQUE_CICLO cc 
        RIGHT JOIN CHEQUE_APROPRIACAO ca ON ca.ID = cc.ID_CHEQUE_APROPRIACAO 
        RIGHT JOIN CHEQUE c ON c.ID = ca.ID_CHEQUE 
        WHERE c.TIPO = '${type === 1 ? 'R' : 'E'}'
        AND c.SITUACAO = 'A'
        AND cc.ID_CICLO_PRODUCAO = ${harvestId}
        ${startDate ? `AND c.DATA_VENCIMENTO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND c.DATA_VENCIMENTO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}`,
        FirebirdDashboardFinanceiroMapper.toTotalDomain,
      )
    )[0];
  }
}

import { Injectable } from '@nestjs/common';
import { DashboardFinanceiroRepository } from './dashboard-financeiro.repository';
import {
  FinancialType,
  TotallizersFiltersDto,
} from './dto/totalizers-filters.dto';
import { FindTotallizersDto } from './dto/find-totalizers.dto';

@Injectable()
export class DashboardFinanceiroService {
  constructor(
    private dashboardFinanceiroRepository: DashboardFinanceiroRepository,
  ) {}

  async findTotalizers(
    host: string,
    code: string,
    findTotallizersDto: FindTotallizersDto,
  ) {
    const { harvestId, startDate, endDate } = findTotallizersDto;

    if (harvestId) {
      const [
        payables,
        receivables,
        checksIssued,
        checksReceived,
        creditCardTotal,
        creditCardRealTotal,
        creditCardLimit,
      ] = await Promise.all([
        this.financialHarvestTotal(host, code, {
          type: FinancialType.PAGAR,
          startDate,
          endDate,
          harvestId,
        }),
        this.financialHarvestTotal(host, code, {
          type: FinancialType.RECEBER,
          startDate,
          endDate,
          harvestId,
        }),
        this.checksHarvestTotal(host, code, {
          type: FinancialType.PAGAR,
          startDate,
          endDate,
          harvestId,
        }),
        this.checksHarvestTotal(host, code, {
          type: FinancialType.RECEBER,
          startDate,
          endDate,
          harvestId,
        }),
        this.creditCardTotal(host, code, { startDate, endDate, harvestId }),
        this.creditCardTotal(host, code, {}),
        this.creditCardLimit(host, code),
      ]);

      const avaiableLimit = creditCardLimit.total - creditCardRealTotal.total;
      const usagePercent = Math.round(
        100 - (avaiableLimit * 100) / creditCardLimit.total,
      );

      return {
        payables,
        receivables,
        checksIssued,
        checksReceived,
        creditCard: {
          ...creditCardTotal,
          totalLimit: creditCardLimit.total,
          avaiableLimit,
          usagePercent,
        },
      };
    }

    const [
      payables,
      receivables,
      checksIssued,
      checksReceived,
      creditCardTotal,
      creditCardRealTotal,
      creditCardLimit,
    ] = await Promise.all([
      this.financialTotal(host, code, {
        type: FinancialType.PAGAR,
        startDate,
        endDate,
      }),
      this.financialTotal(host, code, {
        type: FinancialType.RECEBER,
        startDate,
        endDate,
      }),
      this.checksTotal(host, code, {
        type: FinancialType.PAGAR,
        startDate,
        endDate,
      }),
      this.checksTotal(host, code, {
        type: FinancialType.RECEBER,
        startDate,
        endDate,
      }),
      this.creditCardTotal(host, code, { startDate, endDate }),
      this.creditCardTotal(host, code, {}),
      this.creditCardLimit(host, code),
    ]);

    const avaiableLimit = creditCardLimit.total - creditCardRealTotal.total;
    const usagePercent = Math.round(
      100 - (avaiableLimit * 100) / creditCardLimit.total,
    );

    return {
      payables,
      receivables,
      checksIssued,
      checksReceived,
      creditCard: {
        ...creditCardTotal,
        totalLimit: creditCardLimit.total,
        avaiableLimit,
        usagePercent,
      },
    };
  }

  private financialTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashboardFinanceiroRepository.financialTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }

  private financialHarvestTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashboardFinanceiroRepository.financialHarvestTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }

  private checksTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashboardFinanceiroRepository.checksTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }

  private checksHarvestTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashboardFinanceiroRepository.checksHarvestTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }

  private creditCardTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashboardFinanceiroRepository.creditCardTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }

  private creditCardHarvestTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashboardFinanceiroRepository.creditCardHarvestTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }

  private creditCardLimit(host: string, code: string) {
    return this.dashboardFinanceiroRepository.creditCardLimit(host, code);
  }
}

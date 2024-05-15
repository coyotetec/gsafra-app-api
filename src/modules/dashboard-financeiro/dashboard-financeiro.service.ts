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
    private dashbaordFinanceiroRepository: DashboardFinanceiroRepository,
  ) {}

  async findTotalizers(
    host: string,
    code: string,
    findTotallizersDto: FindTotallizersDto,
  ) {
    const { harvestId, startDate, endDate } = findTotallizersDto;

    if (harvestId) {
      const [payables, receivables, checksIssued, checksReceived] =
        await Promise.all([
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
        ]);

      return { payables, receivables, checksIssued, checksReceived };
    }

    const [payables, receivables, checksIssued, checksReceived] =
      await Promise.all([
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
      ]);

    return { payables, receivables, checksIssued, checksReceived };
  }

  private financialTotal(
    host: string,
    code: string,
    totalizersFiltersDto: TotallizersFiltersDto,
  ) {
    return this.dashbaordFinanceiroRepository.financialTotal(
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
    return this.dashbaordFinanceiroRepository.financialHarvestTotal(
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
    return this.dashbaordFinanceiroRepository.checksTotal(
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
    return this.dashbaordFinanceiroRepository.checksHarvestTotal(
      host,
      code,
      totalizersFiltersDto,
    );
  }
}

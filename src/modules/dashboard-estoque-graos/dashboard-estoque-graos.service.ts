import { Injectable } from '@nestjs/common';
import { DashboardEstoqueGraosRepository } from './dashboard-estoque-graos.repository';
import { DashboardEstoqueGraosArgsDto } from './dto/estoque-graos-args.dto';

@Injectable()
export class DashboardEstoqueGraosService {
  constructor(
    private readonly dashboardEstoqueGraosRepository: DashboardEstoqueGraosRepository,
  ) {}

  async findTotalBalance({
    dbConnection,
    filters,
  }: DashboardEstoqueGraosArgsDto) {
    const { idCultura, startDate, endDate, idArmazenamento, idSafra } = filters;
    const { host, code } = dbConnection;

    let previousBalance = 0;

    if (startDate) {
      previousBalance =
        await this.dashboardEstoqueGraosRepository.findPreviousBalance({
          filters: {
            idCultura,
            idArmazenamento,
            idSafra,
            startDate,
          },
          dbConnection: { host, code },
        });
    }

    const [entries, outflow] = await Promise.all([
      this.dashboardEstoqueGraosRepository.findEntries({
        filters: { idCultura, startDate, endDate, idArmazenamento, idSafra },
        dbConnection,
      }),
      this.dashboardEstoqueGraosRepository.findOutflow({
        filters: { idCultura, startDate, endDate, idArmazenamento, idSafra },
        dbConnection,
      }),
    ]);

    const finalTotalBalance =
      previousBalance + entries.pesoLiquido - outflow.pesoLiquido;

    return {
      previousBalance,
      entries,
      outflow,
      finalTotalBalance,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { DashboardEstoqueGraosRepository } from './dashboard-estoque-graos.repository';
import { DashboardEstoqueGraosFiltersDto } from './dto/estoque-graos-args.dto';
import { DashboardEstoqueGraoProdutorPreviousBalance } from './entities/dashboard-estoque-grao-produtor-previous-balance.entity';
import { DashboardEstoqueGraosProdutorEntries } from './entities/dashboard-estoque-grao-produtor-entries.entity';
import { DashboardEstoqueGraosProdutorOutflow } from './entities/dashboard-estoque-grao-produtor-outflow.entity';
import { DashboardEstoqueGraosProdutor } from './entities/dashboard-estoque-graos-produtor.entity';

@Injectable()
export class DashboardEstoqueGraosService {
  constructor(
    private readonly dashboardEstoqueGraosRepository: DashboardEstoqueGraosRepository,
  ) {}

  async findTotalBalance(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ) {
    let previousBalance = 0;

    if (filters.startDate) {
      previousBalance =
        await this.dashboardEstoqueGraosRepository.findPreviousBalance(
          host,
          code,
          filters,
        );
    }

    const [entries, outflow] = await Promise.all([
      this.dashboardEstoqueGraosRepository.findEntries(host, code, filters),
      this.dashboardEstoqueGraosRepository.findOutflow(host, code, filters),
    ]);

    const finalTotalBalance =
      previousBalance + entries.netWeight - outflow.netWeight;

    return {
      previousBalance,
      entries,
      outflow,
      finalTotalBalance,
    };
  }

  async findProdutorBalance(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ) {
    let previousBalance: DashboardEstoqueGraoProdutorPreviousBalance[] = [];

    if (filters.startDate) {
      previousBalance =
        await this.dashboardEstoqueGraosRepository.findProdutorPreviousBalance(
          host,
          code,
          filters,
        );
    }

    const [entries, outflow] = await Promise.all([
      this.dashboardEstoqueGraosRepository.findProdutorEntries(
        host,
        code,
        filters,
      ),
      this.dashboardEstoqueGraosRepository.findProdutorOutflow(
        host,
        code,
        filters,
      ),
    ]);

    const estoqueGraosProdutor = this.parseEstoqueGraosProdutor(
      entries,
      outflow,
      previousBalance,
    );

    const finalBalance = estoqueGraosProdutor
      .map((item) => ({
        producerId: item.producerId,
        producer: item.producer,
        balance: item.finalBalance,
        sacksBalance: item.finalBalance / 60,
      }))
      .sort((a, b) => b.balance - a.balance);

    return { estoqueGraosProdutor, finalBalance };
  }

  private parseEstoqueGraosProdutor(
    entries: DashboardEstoqueGraosProdutorEntries[],
    outflow: DashboardEstoqueGraosProdutorOutflow[],
    previousBalance: DashboardEstoqueGraoProdutorPreviousBalance[],
  ) {
    return [...entries, ...outflow, ...previousBalance].reduce((acc, curr) => {
      const index = acc.findIndex(
        (t) => t.producerId === curr.producerId && t.producer === curr.producer,
      );

      if (index === -1) {
        const producerPreviousBalance =
          previousBalance.find(
            (t) =>
              t.producerId === curr.producerId && t.producer === curr.producer,
          )?.balance || 0;
        const producerEntries = entries.find(
          (t) =>
            t.producerId === curr.producerId && t.producer === curr.producer,
        ) || {
          producerId: curr.producerId,
          producer: curr.producer,
          weight: 0,
          ratingDiscount: 0,
          receivingFee: 0,
          capitalQuota: 0,
          storageFee: 0,
          technicalBreaks: 0,
          netWeight: 0,
        };
        const producerOutflows = outflow.find(
          (t) =>
            t.producerId === curr.producerId && t.producer === curr.producer,
        ) || {
          producerId: curr.producerId,
          producer: curr.producer,
          weight: 0,
          ratingDiscount: 0,
          netWeight: 0,
        };

        acc.push({
          producerId: curr.producerId,
          producer: curr.producer,
          previousBalance: producerPreviousBalance,
          entries: producerEntries,
          outflows: producerOutflows,
          finalBalance:
            producerPreviousBalance +
            producerEntries.netWeight -
            producerOutflows.netWeight,
        });
      }

      return acc;
    }, [] as DashboardEstoqueGraosProdutor[]);
  }
}

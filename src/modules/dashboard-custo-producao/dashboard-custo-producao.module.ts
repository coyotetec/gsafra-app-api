import { Module } from '@nestjs/common';
import { DashboardCustoProducaoService } from './dashboard-custo-producao.service';
import { DashboardCustoProducaoController } from './dashboard-custo-producao.controller';

@Module({
  controllers: [DashboardCustoProducaoController],
  providers: [DashboardCustoProducaoService],
})
export class DashboardCustoProducaoModule {}

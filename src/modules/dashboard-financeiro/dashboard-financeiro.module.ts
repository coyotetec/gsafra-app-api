import { Module } from '@nestjs/common';
import { DashboardFinanceiroService } from './dashboard-financeiro.service';
import { DashboardFinanceiroController } from './dashboard-financeiro.controller';

@Module({
  controllers: [DashboardFinanceiroController],
  providers: [DashboardFinanceiroService],
})
export class DashboardFinanceiroModule {}

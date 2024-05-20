import { Module } from '@nestjs/common';
import { DashboardEstoqueGraosService } from './dashboard-estoque-graos.service';
import { DashboardEstoqueGraosController } from './dashboard-estoque-graos.controller';

@Module({
  controllers: [DashboardEstoqueGraosController],
  providers: [DashboardEstoqueGraosService],
})
export class DashboardEstoqueGraosModule {}

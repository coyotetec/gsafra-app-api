import { Module } from '@nestjs/common';
import { DashboardIndicadoresService } from './dashboard-indicadores.service';
import { DashboardIndicadoresController } from './dashboard-indicadores.controller';

@Module({
  controllers: [DashboardIndicadoresController],
  providers: [DashboardIndicadoresService],
})
export class DashboardIndicadoresModule {}

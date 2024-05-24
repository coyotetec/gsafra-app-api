import { Module } from '@nestjs/common';
import { AtividadesAgricolasInsumosController } from './atividades-agricolas-insumos.controller';
import { AtividadesAgricolasInsumosService } from './atividades-agricolas-insumos.service';

@Module({
  controllers: [AtividadesAgricolasInsumosController],
  providers: [AtividadesAgricolasInsumosService],
  exports: [AtividadesAgricolasInsumosService],
})
export class AtividadesAgricolasInsumosModule {}

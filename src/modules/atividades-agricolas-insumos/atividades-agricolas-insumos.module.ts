import { Module } from '@nestjs/common';
import { AtividadesAgricolasInsumosController } from './atividades-agricolas-inusmos.controller';
import { AtividadesAgricolasInsumosService } from './atividades-agricolas-insumos.service';

@Module({
  controllers: [AtividadesAgricolasInsumosController],
  providers: [AtividadesAgricolasInsumosService],
})
export class AtividadesAgricolasInsumosModule {}

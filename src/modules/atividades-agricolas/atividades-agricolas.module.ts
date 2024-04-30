import { Module } from '@nestjs/common';
import { AtividadesAgricolasService } from './atividades-agricolas.service';
import { AtividadesAgricolasController } from './atividades-agricolas.controller';

@Module({
  controllers: [AtividadesAgricolasController],
  providers: [AtividadesAgricolasService],
})
export class AtividadesAgricolasModule {}

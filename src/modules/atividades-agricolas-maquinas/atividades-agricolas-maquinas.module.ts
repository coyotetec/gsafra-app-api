import { Module } from '@nestjs/common';
import { AtividadesAgricolasMaquinasController } from './atividades-agricolas-maquinas.controller';
import { AtividadesAgricolasMaquinasService } from './atividades-agricolas-maquinas.service';

@Module({
  controllers: [AtividadesAgricolasMaquinasController],
  providers: [AtividadesAgricolasMaquinasService],
  exports: [AtividadesAgricolasMaquinasService],
})
export class AtividadesAgricolasMaquinasModule {}

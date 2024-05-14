import { Module } from '@nestjs/common';
import { AtividadesAgricolasService } from './atividades-agricolas.service';
import { AtividadesAgricolasController } from './atividades-agricolas.controller';
import { AtividadesAgricolasTalhoesSafrasModule } from '../atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.module';
import { AtividadesAgricolasMaquinasModule } from '../atividades-agricolas-maquinas/atividades-agricolas-maquinas.module';
import { AtividadesAgricolasInsumosModule } from '../atividades-agricolas-insumos/atividades-agricolas-insumos.module';

@Module({
  imports: [
    AtividadesAgricolasInsumosModule,
    AtividadesAgricolasMaquinasModule,
    AtividadesAgricolasTalhoesSafrasModule,
  ],
  controllers: [AtividadesAgricolasController],
  providers: [AtividadesAgricolasService],
})
export class AtividadesAgricolasModule {}

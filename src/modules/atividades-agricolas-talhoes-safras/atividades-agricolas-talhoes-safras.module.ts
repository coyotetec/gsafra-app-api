import { Module } from '@nestjs/common';
import { AtividadesAgricolasTalhoesSafrasController } from './atividades-agricolas-talhoes-safras.controller';
import { AtividadesAgricolasTalhoesSafrasService } from './atividades-agricolas-talhoes-safras.service';

@Module({
  controllers: [AtividadesAgricolasTalhoesSafrasController],
  providers: [AtividadesAgricolasTalhoesSafrasService],
})
export class AtividadesAgricolasTalhoesSafrasModule {}

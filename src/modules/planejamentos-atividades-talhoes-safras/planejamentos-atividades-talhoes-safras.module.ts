import { Module } from '@nestjs/common';
import { PlanejamentosAtividadesTalhoesSafrasController } from './planejamentos-atividades-talhoes-safras.controller';
import { PlanejamentosAtividadesTalhoesSafrasService } from './planejamentos-atividades-talhoes-safras.service';

@Module({
  controllers: [PlanejamentosAtividadesTalhoesSafrasController],
  providers: [PlanejamentosAtividadesTalhoesSafrasService],
})
export class PlanejamentosAtividadesTalhoesSafrasModule {}

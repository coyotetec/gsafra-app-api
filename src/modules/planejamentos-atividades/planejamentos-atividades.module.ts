import { Module } from '@nestjs/common';
import { PlanejamentosAtividadesController } from './planejamentos-atividades.controller';
import { PlanejamentosAtividadesService } from './planejamentos-atividades.service';

@Module({
  controllers: [PlanejamentosAtividadesController],
  providers: [PlanejamentosAtividadesService],
})
export class PlanejamentosAtividadesModule {}

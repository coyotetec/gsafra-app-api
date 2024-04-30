import { Module } from '@nestjs/common';
import { PlanejamentosAtividadesInsumosService } from './planejamentos-atividades-insumos.service';
import { PlanejamentosAtividadesInsumosController } from './planejamentos-atividades-insumos.controller';

@Module({
  controllers: [PlanejamentosAtividadesInsumosController],
  providers: [PlanejamentosAtividadesInsumosService],
})
export class PlanejamentosAtividadesInsumosModule {}

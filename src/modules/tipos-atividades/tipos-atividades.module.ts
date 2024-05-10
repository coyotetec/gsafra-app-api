import { Module } from '@nestjs/common';
import { TiposAtividadesService } from './tipos-atividades.service';
import { TiposAtividadesController } from './tipos-atividades.controller';

@Module({
  controllers: [TiposAtividadesController],
  providers: [TiposAtividadesService],
})
export class TiposAtividadesModule {}

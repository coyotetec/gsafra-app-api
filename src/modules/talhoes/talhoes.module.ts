import { Module } from '@nestjs/common';
import { TalhoesService } from './talhoes.service';
import { TalhoesController } from './talhoes.controller';

@Module({
  controllers: [TalhoesController],
  providers: [TalhoesService],
})
export class TalhoesModule {}

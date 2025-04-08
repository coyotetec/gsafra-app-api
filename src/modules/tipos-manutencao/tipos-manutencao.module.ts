import { Module } from '@nestjs/common';
import { TiposManutencaoService } from './tipos-manutencao.service';
import { TiposManutencaoController } from './tipos-manutencao.controller';

@Module({
  controllers: [TiposManutencaoController],
  providers: [TiposManutencaoService],
})
export class TiposManutencaoModule {}

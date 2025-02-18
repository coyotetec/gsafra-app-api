import { Module } from '@nestjs/common';
import { ManutencaoController } from './manutencao.controller';
import { ManutencaoService } from './manutencao.service';

@Module({
  imports: [],
  controllers: [ManutencaoController],
  providers: [ManutencaoService],
})
export class ManutencaoModule { }

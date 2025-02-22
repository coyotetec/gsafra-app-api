import { Module } from '@nestjs/common';
import { ManutencaoCicloController } from './manutencao-ciclo.controller';
import { ManutencaoCicloService } from './manutencao-ciclo.service';

@Module({
  imports: [],
  controllers: [ManutencaoCicloController],
  providers: [ManutencaoCicloService],
})
export class ManutencaoCicloModule { }

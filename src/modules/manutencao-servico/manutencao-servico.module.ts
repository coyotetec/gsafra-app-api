import { Module } from '@nestjs/common';
import { ManutencaoServicoController } from './manutencao-servico.controller';
import { ManutencaoServicoService } from './manutencao-servico.service';

@Module({
  imports: [],
  controllers: [ManutencaoServicoController],
  providers: [ManutencaoServicoService],
})
export class ManutencaoServicoModule { }

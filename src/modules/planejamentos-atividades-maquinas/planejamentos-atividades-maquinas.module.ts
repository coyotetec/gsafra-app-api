import { Module } from '@nestjs/common';
import { PlanejamentosAtividadesMaquinasController } from './planejamentos-atividades-maquinas.controller';
import { PlanejamentosAtividadesMaquinasService } from './planejamentos-atividades-maquinas.service';

@Module({
  controllers: [PlanejamentosAtividadesMaquinasController],
  providers: [PlanejamentosAtividadesMaquinasService],
})
export class PlanejamentosAtividadesMaquinasModule {}

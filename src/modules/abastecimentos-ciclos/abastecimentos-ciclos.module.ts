import { Module } from '@nestjs/common';
import { AbastecimentosCiclosService } from './abastecimentos-ciclos.service';
import { AbastecimentosCilosController } from './abastecimentos-ciclos.controller';

@Module({
  controllers: [AbastecimentosCilosController],
  providers: [AbastecimentosCiclosService],
})
export class AbastecimentosCiclosModule {}

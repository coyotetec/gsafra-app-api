import { Module } from '@nestjs/common';
import { AbastecimentosCiclosService } from './abastecimentos-ciclos.service';
import { AbastecimentosCilosController } from './abastecimentos-ciclos.controller';
import { AbastecimentosCiclosTalhoesSafrasModule } from '../abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';

@Module({
  imports: [AbastecimentosCiclosTalhoesSafrasModule],
  controllers: [AbastecimentosCilosController],
  providers: [AbastecimentosCiclosService],
  exports: [AbastecimentosCiclosService],
})
export class AbastecimentosCiclosModule {}

import { Module } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasService } from './abastecimentos-ciclos-talhoes-safras.service';
import { AbastecimentosCiclosTalhoesSafrasController } from './abastecimentos-ciclos-talhoes-safras.controller';

@Module({
  controllers: [AbastecimentosCiclosTalhoesSafrasController],
  providers: [AbastecimentosCiclosTalhoesSafrasService],
})
export class AbastecimentosCiclosTalhoesSafrasModule {}

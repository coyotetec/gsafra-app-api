import { Module } from '@nestjs/common';
import { AbastecimentosService } from './abastecimentos.service';
import { AbastecimentosController } from './abastecimentos.controller';
import { AbastecimentosCiclosModule } from '../abastecimentos-ciclos/abastecimentos-ciclos.module';

@Module({
  imports: [AbastecimentosCiclosModule],
  controllers: [AbastecimentosController],
  providers: [AbastecimentosService],
})
export class AbastecimentosModule {}

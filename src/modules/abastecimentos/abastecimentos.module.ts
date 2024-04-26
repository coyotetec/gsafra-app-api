import { Module } from '@nestjs/common';
import { AbastecimentosService } from './abastecimentos.service';
import { AbastecimentosController } from './abastecimentos.controller';

@Module({
  controllers: [AbastecimentosController],
  providers: [AbastecimentosService],
})
export class AbastecimentosModule {}

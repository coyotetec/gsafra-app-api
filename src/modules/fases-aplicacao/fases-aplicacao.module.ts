import { Module } from '@nestjs/common';
import { FasesAplicacaoService } from './fases-aplicacao.service';
import { FasesAplicacaoController } from './fases-aplicacao.controller';

@Module({
  controllers: [FasesAplicacaoController],
  providers: [FasesAplicacaoService],
})
export class FasesAplicacaoModule {}

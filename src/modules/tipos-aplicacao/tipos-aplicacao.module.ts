import { Module } from '@nestjs/common';
import { TiposAplicacaoService } from './tipos-aplicacao.service';
import { TiposAplicacaoController } from './tipos-aplicacao.controller';

@Module({
  controllers: [TiposAplicacaoController],
  providers: [TiposAplicacaoService],
})
export class TiposAplicacaoModule {}

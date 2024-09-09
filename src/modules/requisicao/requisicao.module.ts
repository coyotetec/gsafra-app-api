import { Module } from '@nestjs/common';
import { RequisicaoService } from './requisicao.service';
import { RequisicaoController } from './requisicao.controller';

@Module({
  controllers: [RequisicaoController],
  providers: [RequisicaoService],
})
export class RequisicaoModule {}

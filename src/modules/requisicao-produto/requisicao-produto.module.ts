import { Module } from '@nestjs/common';
import { RequisicaoProdutoService } from './requisicao-produto.service';
import { RequisicaoProdutoController } from './requisicao-produto.controller';

@Module({
  controllers: [RequisicaoProdutoController],
  providers: [RequisicaoProdutoService],
})
export class RequisicaoProdutoModule {}

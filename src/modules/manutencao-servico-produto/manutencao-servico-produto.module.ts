import { Module } from '@nestjs/common';
import { ManutencaoServicoProdutoController } from './manutencao-servico-produto.controller';
import { ManutencaoServicoProdutoService } from './manutencao-servico-produto.service';

@Module({
  imports: [],
  controllers: [ManutencaoServicoProdutoController],
  providers: [ManutencaoServicoProdutoService],
})
export class ManutencaoServicoProdutoModule { }

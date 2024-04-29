import { Module } from '@nestjs/common';
import { ProdutosAlmoxarifadoService } from './produtos-almoxarifado.service';
import { ProdutosAlmoxarifadoController } from './produtos-almoxarifado.controller';

@Module({
  controllers: [ProdutosAlmoxarifadoController],
  providers: [ProdutosAlmoxarifadoService],
})
export class ProdutosAlmoxarifadoModule {}

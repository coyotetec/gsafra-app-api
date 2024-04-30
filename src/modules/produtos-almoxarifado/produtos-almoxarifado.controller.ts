import { Controller, Get } from '@nestjs/common';
import { ProdutosAlmoxarifadoService } from './produtos-almoxarifado.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('produtos-almoxarifado')
export class ProdutosAlmoxarifadoController {
  constructor(
    private readonly produtosAlmoxarifadoService: ProdutosAlmoxarifadoService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.produtosAlmoxarifadoService.findAll({ code, host });
  }
}

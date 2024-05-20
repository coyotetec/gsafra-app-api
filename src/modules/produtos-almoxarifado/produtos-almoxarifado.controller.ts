import { Controller, Get, Query } from '@nestjs/common';
import { ProdutosAlmoxarifadoService } from './produtos-almoxarifado.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('produtos-almoxarifado')
export class ProdutosAlmoxarifadoController {
  constructor(
    private readonly produtosAlmoxarifadoService: ProdutosAlmoxarifadoService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.produtosAlmoxarifadoService.findAll(
      { code, host },
      lastUpdatedAt,
    );
  }
}

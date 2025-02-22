import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { ManutencaoServicoProdutoService } from './manutencao-servico-produto.service';

@Controller('manutencao-servico-produto')
export class ManutencaoServicoProdutoController {
  constructor(private readonly service: ManutencaoServicoProdutoService) { }

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.service.findAll(host, code, lastUpdatedAt);
  }

  // @Post()
  // create(
  //   @DBConnectionData() { host, code }: DBConnectionDataType,
  //   @Body() createAbastecimentoDto: CreateAbastecimentoDto,
  // ) {
  //   return this.abastecimentosService.create(
  //     host,
  //     code,
  //     createAbastecimentoDto,
  //   );
  // }
}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { CreateProdutoRequisicaoDto } from './dto/create-requisicao-produto.dto';
import { RequisicaoProdutoService } from './requisicao-produto.service';

@Controller('requisicao-produto')
export class RequisicaoProdutoController {
  constructor(private readonly requisicaoService: RequisicaoProdutoService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.requisicaoService.findAll({ code, host }, lastUpdatedAt);
  }

  @Post()
  create(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Body() createDto: CreateProdutoRequisicaoDto,
  ) {
    return this.requisicaoService.create(host, code, createDto);
  }
}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { RequisicaoService } from './requisicao.service';
import { CreateRequisicaoDto } from './dto/create-requisicao.dto';

@Controller('requisicao')
export class RequisicaoController {
  constructor(private readonly requisicaoService: RequisicaoService) {}

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
    @Body() createDto: CreateRequisicaoDto,
  ) {
    return this.requisicaoService.create(host, code, createDto);
  }
}

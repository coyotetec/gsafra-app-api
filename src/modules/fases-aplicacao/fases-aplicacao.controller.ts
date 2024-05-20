import { Controller, Get, Query } from '@nestjs/common';
import { FasesAplicacaoService } from './fases-aplicacao.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('fases-aplicacao')
export class FasesAplicacaoController {
  constructor(private readonly fasesAplicacaoService: FasesAplicacaoService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.fasesAplicacaoService.findAll({ code, host }, lastUpdatedAt);
  }
}

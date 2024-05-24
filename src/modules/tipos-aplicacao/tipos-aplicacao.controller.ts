import { Controller, Get, Query } from '@nestjs/common';
import { TiposAplicacaoService } from './tipos-aplicacao.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('tipos-aplicacao')
export class TiposAplicacaoController {
  constructor(private readonly tiposAplicacaoService: TiposAplicacaoService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.tiposAplicacaoService.findAll({ code, host }, lastUpdatedAt);
  }
}

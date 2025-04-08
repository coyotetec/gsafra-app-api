import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { TiposManutencaoService } from './tipos-manutencao.service';

@Controller('tipos-manutencao')
export class TiposManutencaoController {
  constructor(
    private readonly tiposManutencaoService: TiposManutencaoService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.tiposManutencaoService.findAll({ code, host }, lastUpdatedAt);
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { PlanejamentosAtividadesTalhoesSafrasService } from './planejamentos-atividades-talhoes-safras.service';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('planejamentos-atividades-talhoes-safras')
export class PlanejamentosAtividadesTalhoesSafrasController {
  constructor(
    private readonly planejamentosAtividadesTalhoesSafrasService: PlanejamentosAtividadesTalhoesSafrasService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.planejamentosAtividadesTalhoesSafrasService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { AbastecimentosCiclosService } from './abastecimentos-ciclos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('abastecimentos-ciclos')
export class AbastecimentosCilosController {
  constructor(
    private readonly abastecimentosCilosService: AbastecimentosCiclosService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.abastecimentosCilosService.findAll(host, code, lastUpdatedAt);
  }
}

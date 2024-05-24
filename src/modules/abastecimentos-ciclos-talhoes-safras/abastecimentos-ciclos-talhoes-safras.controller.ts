import { Controller, Get, Query } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasService } from './abastecimentos-ciclos-talhoes-safras.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('abastecimentos-ciclos-talhoes-safras')
export class AbastecimentosCiclosTalhoesSafrasController {
  constructor(
    private readonly abastecimentosCiclosTalhoesSafrasService: AbastecimentosCiclosTalhoesSafrasService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.abastecimentosCiclosTalhoesSafrasService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

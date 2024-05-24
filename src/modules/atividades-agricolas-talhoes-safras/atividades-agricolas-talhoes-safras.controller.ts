import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { AtividadesAgricolasTalhoesSafrasService } from './atividades-agricolas-talhoes-safras.service';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('atividades-agricolas-talhoes-safras')
export class AtividadesAgricolasTalhoesSafrasController {
  constructor(
    private readonly atividadesAgricolasTalhoesSafrasService: AtividadesAgricolasTalhoesSafrasService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.atividadesAgricolasTalhoesSafrasService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

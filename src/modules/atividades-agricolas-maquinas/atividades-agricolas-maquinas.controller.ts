import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { AtividadesAgricolasMaquinasService } from './atividades-agricolas-maquinas.service';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('atividades-agricolas-maquinas')
export class AtividadesAgricolasMaquinasController {
  constructor(
    private readonly atividadesAgricolasMaquinasService: AtividadesAgricolasMaquinasService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.atividadesAgricolasMaquinasService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

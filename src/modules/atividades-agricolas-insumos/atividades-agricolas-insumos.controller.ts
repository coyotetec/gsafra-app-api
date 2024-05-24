import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { AtividadesAgricolasInsumosService } from './atividades-agricolas-insumos.service';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('atividades-agricolas-insumos')
export class AtividadesAgricolasInsumosController {
  constructor(
    private readonly atividadesAgricolasInsumosService: AtividadesAgricolasInsumosService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.atividadesAgricolasInsumosService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

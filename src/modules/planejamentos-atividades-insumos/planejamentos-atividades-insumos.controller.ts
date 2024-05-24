import { Controller, Get, Query } from '@nestjs/common';
import { PlanejamentosAtividadesInsumosService } from './planejamentos-atividades-insumos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('planejamentos-atividades-insumos')
export class PlanejamentosAtividadesInsumosController {
  constructor(
    private readonly planejamentosAtividadesInsumosService: PlanejamentosAtividadesInsumosService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.planejamentosAtividadesInsumosService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

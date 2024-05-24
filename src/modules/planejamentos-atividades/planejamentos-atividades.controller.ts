import { Controller, Get, Query } from '@nestjs/common';
import { PlanejamentosAtividadesService } from './planejamentos-atividades.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('planejamentos-atividades')
export class PlanejamentosAtividadesController {
  constructor(
    private readonly planejamentosAtividadeService: PlanejamentosAtividadesService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.planejamentosAtividadeService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

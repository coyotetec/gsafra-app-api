import { Controller, Get, Query } from '@nestjs/common';
import { PlanejamentosAtividadesMaquinasService } from './planejamentos-atividades-maquinas.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('planejamentos-atividades-maquinas')
export class PlanejamentosAtividadesMaquinasController {
  constructor(
    private readonly planejamentosAtividadesMaquinasService: PlanejamentosAtividadesMaquinasService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.planejamentosAtividadesMaquinasService.findAll(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

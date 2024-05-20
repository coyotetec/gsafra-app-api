import { Controller, Get, Query } from '@nestjs/common';
import { EstadiosFenologicosService } from './estadios-fenologicos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('estadios-fenologicos')
export class EstadiosFenologicosController {
  constructor(
    private readonly estadiosFenologicosService: EstadiosFenologicosService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.estadiosFenologicosService.findAll(
      { host, code },
      lastUpdatedAt,
    );
  }
}

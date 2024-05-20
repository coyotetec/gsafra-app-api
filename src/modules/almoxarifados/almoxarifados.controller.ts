import { Controller, Get, Query } from '@nestjs/common';
import { AlmoxarifadosService } from './almoxarifados.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('almoxarifados')
export class AlmoxarifadosController {
  constructor(private readonly almoxarifadosService: AlmoxarifadosService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.almoxarifadosService.findAll({ code, host }, lastUpdatedAt);
  }
}

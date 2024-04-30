import { Controller, Get } from '@nestjs/common';
import { AlmoxarifadosService } from './almoxarifados.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('almoxarifados')
export class AlmoxarifadosController {
  constructor(private readonly almoxarifadosService: AlmoxarifadosService) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.almoxarifadosService.findAll({ code, host });
  }
}

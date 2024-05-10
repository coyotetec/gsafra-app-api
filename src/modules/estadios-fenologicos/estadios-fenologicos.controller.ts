import { Controller, Get } from '@nestjs/common';
import { EstadiosFenologicosService } from './estadios-fenologicos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('estadios-fenologicos')
export class EstadiosFenologicosController {
  constructor(
    private readonly estadiosFenologicosService: EstadiosFenologicosService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.estadiosFenologicosService.findAll({ host, code });
  }
}

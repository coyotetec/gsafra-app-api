import { Controller, Get } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { AtividadesAgricolasInsumosService } from './atividades-agricolas-insumos.service';

@Controller('atividades-agricolas-insumos')
export class AtividadesAgricolasInsumosController {
  constructor(
    private readonly atividadesAgricolasInsumosService: AtividadesAgricolasInsumosService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.atividadesAgricolasInsumosService.findAll(host, code);
  }
}

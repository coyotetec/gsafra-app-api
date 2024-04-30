import { Controller, Get } from '@nestjs/common';
import { AtividadesAgricolasService } from './atividades-agricolas.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('atividades-agricolas')
export class AtividadesAgricolasController {
  constructor(
    private readonly atividadesAgricolasService: AtividadesAgricolasService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.atividadesAgricolasService.findAll(host, code);
  }
}

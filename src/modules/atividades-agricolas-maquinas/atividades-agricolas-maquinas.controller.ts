import { Controller, Get } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { AtividadesAgricolasMaquinasService } from './atividades-agricolas-maquinas.service';

@Controller('atividades-agricolas-maquinas')
export class AtividadesAgricolasMaquinasController {
  constructor(
    private readonly atividadesAgricolasMaquinasService: AtividadesAgricolasMaquinasService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.atividadesAgricolasMaquinasService.findAll(host, code);
  }
}

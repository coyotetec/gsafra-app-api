import { Controller, Get } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { AtividadesAgricolasTalhoesSafrasService } from './atividades-agricolas-talhoes-safras.service';

@Controller('atividades-agricolas-talhoes-safras')
export class AtividadesAgricolasTalhoesSafrasController {
  constructor(
    private readonly atividadesAgricolasTalhoesSafrasService: AtividadesAgricolasTalhoesSafrasService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.atividadesAgricolasTalhoesSafrasService.findAll(host, code);
  }
}

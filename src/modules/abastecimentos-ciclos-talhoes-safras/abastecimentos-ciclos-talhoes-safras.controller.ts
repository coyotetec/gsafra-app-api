import { Controller, Get } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasService } from './abastecimentos-ciclos-talhoes-safras.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('abastecimentos-ciclos-talhoes-safras')
export class AbastecimentosCiclosTalhoesSafrasController {
  constructor(
    private readonly abastecimentosCiclosTalhoesSafrasService: AbastecimentosCiclosTalhoesSafrasService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.abastecimentosCiclosTalhoesSafrasService.findAll(host, code);
  }
}

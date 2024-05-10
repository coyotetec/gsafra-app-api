import { Controller, Get } from '@nestjs/common';
import { FasesAplicacaoService } from './fases-aplicacao.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('fases-aplicacao')
export class FasesAplicacaoController {
  constructor(private readonly fasesAplicacaoService: FasesAplicacaoService) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.fasesAplicacaoService.findAll({ code, host });
  }
}

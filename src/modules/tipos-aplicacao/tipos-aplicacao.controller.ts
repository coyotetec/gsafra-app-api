import { Controller, Get } from '@nestjs/common';
import { TiposAplicacaoService } from './tipos-aplicacao.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('tipos-aplicacao')
export class TiposAplicacaoController {
  constructor(private readonly tiposAplicacaoService: TiposAplicacaoService) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.tiposAplicacaoService.findAll({ code, host });
  }
}

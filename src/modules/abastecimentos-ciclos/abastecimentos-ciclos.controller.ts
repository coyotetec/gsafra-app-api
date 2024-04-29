import { Controller, Get } from '@nestjs/common';
import { AbastecimentosCiclosService } from './abastecimentos-ciclos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('abastecimentos-ciclos')
export class AbastecimentosCilosController {
  constructor(
    private readonly abastecimentosCilosService: AbastecimentosCiclosService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.abastecimentosCilosService.findAll(host, code);
  }
}

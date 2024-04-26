import { Controller, Get } from '@nestjs/common';
import { AbastecimentosService } from './abastecimentos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('abastecimentos')
export class AbastecimentosController {
  constructor(private readonly abastecimentosService: AbastecimentosService) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.abastecimentosService.findAll(host, code);
  }
}

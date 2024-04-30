import { Controller, Get } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { PlanejamentosAtividadesTalhoesSafrasService } from './planejamentos-atividades-talhoes-safras.service';

@Controller('planejamentos-atividades-talhoes-safras')
export class PlanejamentosAtividadesTalhoesSafrasController {
  constructor(
    private readonly planejamentosAtividadesTalhoesSafrasService: PlanejamentosAtividadesTalhoesSafrasService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.planejamentosAtividadesTalhoesSafrasService.findAll(host, code);
  }
}

import { Controller, Get } from '@nestjs/common';
import { PlanejamentosAtividadesService } from './planejamentos-atividades.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('planejamentos-atividades')
export class PlanejamentosAtividadesController {
  constructor(
    private readonly planejamentosAtividadeService: PlanejamentosAtividadesService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.planejamentosAtividadeService.findAll(host, code);
  }
}

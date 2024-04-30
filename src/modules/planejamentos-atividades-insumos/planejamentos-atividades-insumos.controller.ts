import { Controller, Get } from '@nestjs/common';
import { PlanejamentosAtividadesInsumosService } from './planejamentos-atividades-insumos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('planejamentos-atividades-insumos')
export class PlanejamentosAtividadesInsumosController {
  constructor(
    private readonly planejamentosAtividadesInsumosService: PlanejamentosAtividadesInsumosService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.planejamentosAtividadesInsumosService.findAll(host, code);
  }
}

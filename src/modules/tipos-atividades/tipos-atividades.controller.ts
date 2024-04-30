import { Controller, Get } from '@nestjs/common';
import { TiposAtividadesService } from './tipos-atividades.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('tipos-atividades')
export class TiposAtividadesController {
  constructor(
    private readonly tiposAtividadesService: TiposAtividadesService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.tiposAtividadesService.findAll({ code, host });
  }
}

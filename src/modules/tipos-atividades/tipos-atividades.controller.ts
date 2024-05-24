import { Controller, Get, Query } from '@nestjs/common';
import { TiposAtividadesService } from './tipos-atividades.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('tipos-atividades')
export class TiposAtividadesController {
  constructor(
    private readonly tiposAtividadesService: TiposAtividadesService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.tiposAtividadesService.findAll({ code, host }, lastUpdatedAt);
  }
}

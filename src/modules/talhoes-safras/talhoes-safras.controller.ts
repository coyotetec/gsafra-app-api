import { Controller, Get, Query } from '@nestjs/common';
import { TalhoesSafrasService } from './talhoes-safras.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('talhoes-safras')
export class TalhoesSafrasController {
  constructor(private readonly talhoesSafrasService: TalhoesSafrasService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.talhoesSafrasService.findAll({ code, host }, lastUpdatedAt);
  }
}

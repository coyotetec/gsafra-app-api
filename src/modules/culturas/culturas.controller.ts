import { Controller, Get, Query } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('culturas')
export class CulturasController {
  constructor(private readonly culturasService: CulturasService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.culturasService.findAll({ code, host }, lastUpdatedAt);
  }
}

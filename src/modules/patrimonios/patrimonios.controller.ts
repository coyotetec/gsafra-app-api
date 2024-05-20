import { Controller, Get, Query } from '@nestjs/common';
import { PatrimoniosService } from './patrimonios.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('patrimonios')
export class PatrimoniosController {
  constructor(private readonly patrimoniosService: PatrimoniosService) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.patrimoniosService.findAll(host, code, lastUpdatedAt);
  }
}

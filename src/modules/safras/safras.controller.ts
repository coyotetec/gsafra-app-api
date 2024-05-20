import { Controller, Get, Query } from '@nestjs/common';
import { SafrasService } from './safras.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('safras')
export class SafrasController {
  constructor(private readonly safrasService: SafrasService) {}

  @Get()
  findAll(
    @DBConnectionData() { code, host }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.safrasService.findAll({ code, host }, lastUpdatedAt);
  }
}

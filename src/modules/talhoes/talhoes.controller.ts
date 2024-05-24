import { Controller, Get, Query } from '@nestjs/common';
import { TalhoesService } from './talhoes.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('talhoes')
export class TalhoesController {
  constructor(private readonly talhoesService: TalhoesService) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.talhoesService.findAll({ host, code }, lastUpdatedAt);
  }
}

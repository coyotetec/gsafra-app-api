import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { CreateManutencaoCicloDto } from './dto/create-manutencao-ciclo.dto';
import { ManutencaoCicloService } from './manutencao-ciclo.service';

@Controller('manutencao-ciclo')
export class ManutencaoCicloController {
  constructor(private readonly service: ManutencaoCicloService) { }

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.service.findAll(host, code, lastUpdatedAt);
  }

   @Post()
   create(
     @DBConnectionData() { host, code }: DBConnectionDataType,
     @Body() create: CreateManutencaoCicloDto,
   ) {
     return this.service.create(
       host,
       code,
       create,
     );
   }
}

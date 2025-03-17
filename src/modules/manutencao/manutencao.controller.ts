import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { ManutencaoService } from './manutencao.service';

@Controller('manutencao')
export class ManutencaoController {
  constructor(private readonly manutencaoServcie: ManutencaoService) { }

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.manutencaoServcie.findAll(host, code, lastUpdatedAt);
  }

   @Post()
   async create(
     @DBConnectionData() { host, code }: DBConnectionDataType,
     @Body() createManutencaoDto: CreateManutencaoDto,
   ) {
     return await this.manutencaoServcie.create(
       host,
       code,
       createManutencaoDto,
     );
   }
}

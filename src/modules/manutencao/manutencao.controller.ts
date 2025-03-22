import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
  @Get('bySafra')
  findBySafra(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
    @Query('safraId') safraId?: number,
  ) {
   return this.manutencaoServcie.findBySafraId(host, code, lastUpdatedAt, safraId)
  }
  @Get('detail/:id')
  findDetail(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
    @Param('id') id?: string  ) {
   return this.manutencaoServcie.findById(host, code, lastUpdatedAt, Number(id))
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

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AbastecimentosService } from './abastecimentos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { CreateAbastecimentoDto } from './dto/create-abastecimento.dto';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('abastecimentos')
export class AbastecimentosController {
  constructor(private readonly abastecimentosService: AbastecimentosService) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.abastecimentosService.findAll(host, code, lastUpdatedAt);
  }

  @Post()
  create(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Body() createAbastecimentoDto: CreateAbastecimentoDto,
  ) {
    return this.abastecimentosService.create(
      host,
      code,
      createAbastecimentoDto,
    );
  }
}

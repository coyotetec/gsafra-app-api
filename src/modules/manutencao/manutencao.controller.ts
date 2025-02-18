import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
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

  // @Post()
  // create(
  //   @DBConnectionData() { host, code }: DBConnectionDataType,
  //   @Body() createAbastecimentoDto: CreateAbastecimentoDto,
  // ) {
  //   return this.abastecimentosService.create(
  //     host,
  //     code,
  //     createAbastecimentoDto,
  //   );
  // }
}

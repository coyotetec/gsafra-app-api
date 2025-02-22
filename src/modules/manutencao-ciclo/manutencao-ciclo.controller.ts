import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
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

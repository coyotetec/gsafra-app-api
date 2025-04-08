import { Controller, Get, Query } from '@nestjs/common';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';
import { ManutencaoServicoService } from './manutencao-servico.service';

@Controller('manutencao-servico')
export class ManutencaoServicoController {
  constructor(private readonly manutencaoServicoServcie: ManutencaoServicoService) { }

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.manutencaoServicoServcie.findAll(host, code, lastUpdatedAt);
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

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AbastecimentosService } from './abastecimentos.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { CreateAbastecimentoDto } from './dto/create-abastecimento.dto';

@Controller('abastecimentos')
export class AbastecimentosController {
  constructor(private readonly abastecimentosService: AbastecimentosService) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.abastecimentosService.findAll(host, code);
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

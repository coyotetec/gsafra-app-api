import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AtividadesAgricolasService } from './atividades-agricolas.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { CreateAtividadeAgricolaDto } from './dto/create-atividade-agricola.dto';
import { ParseDatePipe } from 'src/shared/pipes/ParseDatePipe';

@Controller('atividades-agricolas')
export class AtividadesAgricolasController {
  constructor(
    private readonly atividadesAgricolasService: AtividadesAgricolasService,
  ) {}

  @Get()
  findAll(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('lastUpdatedAt', ParseDatePipe) lastUpdatedAt?: Date,
  ) {
    return this.atividadesAgricolasService.findAll(host, code, lastUpdatedAt);
  }

  @Post()
  create(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Body() createAtividadeAgricolaDto: CreateAtividadeAgricolaDto,
  ) {
    return this.atividadesAgricolasService.create(
      host,
      code,
      createAtividadeAgricolaDto,
    );
  }
}

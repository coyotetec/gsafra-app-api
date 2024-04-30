import { Controller, Get } from '@nestjs/common';
import { PlanejamentosAtividadesMaquinasService } from './planejamentos-atividades-maquinas.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('planejamentos-atividades-maquinas')
export class PlanejamentosAtividadesMaquinasController {
  constructor(
    private readonly planejamentosAtividadesMaquinasService: PlanejamentosAtividadesMaquinasService,
  ) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.planejamentosAtividadesMaquinasService.findAll(host, code);
  }
}

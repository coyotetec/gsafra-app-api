import { Controller, Get } from '@nestjs/common';
import { TalhoesService } from './talhoes.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('talhoes')
export class TalhoesController {
  constructor(private readonly talhoesService: TalhoesService) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.talhoesService.findAll({ host, code });
  }
}

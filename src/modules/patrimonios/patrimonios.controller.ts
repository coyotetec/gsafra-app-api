import { Controller, Get } from '@nestjs/common';
import { PatrimoniosService } from './patrimonios.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('patrimonios')
export class PatrimoniosController {
  constructor(private readonly patrimoniosService: PatrimoniosService) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.patrimoniosService.findAll(host, code);
  }
}

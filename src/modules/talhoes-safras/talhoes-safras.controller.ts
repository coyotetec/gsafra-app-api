import { Controller, Get } from '@nestjs/common';
import { TalhoesSafrasService } from './talhoes-safras.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('talhoes-safras')
export class TalhoesSafrasController {
  constructor(private readonly talhoesSafrasService: TalhoesSafrasService) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.talhoesSafrasService.findAll({ code, host });
  }
}

import { Controller, Get } from '@nestjs/common';
import { SafrasService } from './safras.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('safras')
export class SafrasController {
  constructor(private readonly safrasService: SafrasService) {}

  @Get()
  findAll(@DBConnectionData() { code, host }: DBConnectionDataType) {
    return this.safrasService.findAll({ code, host });
  }
}

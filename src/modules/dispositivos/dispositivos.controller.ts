import {
  Controller,
  Post,
  Body,
  Get,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { DispositivosService } from './dispositivos.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('dispositivos')
export class DispositivosController {
  constructor(private readonly dispositivosService: DispositivosService) {}

  @Post()
  create(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Body() createDispositivoDto: CreateDispositivoDto,
  ) {
    return this.dispositivosService.create(host, code, createDispositivoDto);
  }

  @Get(':id')
  findById(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.dispositivosService.findById(host, code, id);
  }
}

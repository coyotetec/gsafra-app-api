import { Module } from '@nestjs/common';
import { AlmoxarifadosService } from './almoxarifados.service';
import { AlmoxarifadosController } from './almoxarifados.controller';

@Module({
  controllers: [AlmoxarifadosController],
  providers: [AlmoxarifadosService],
})
export class AlmoxarifadosModule {}

import { Module } from '@nestjs/common';
import { EstadiosFenologicosService } from './estadios-fenologicos.service';
import { EstadiosFenologicosController } from './estadios-fenologicos.controller';

@Module({
  controllers: [EstadiosFenologicosController],
  providers: [EstadiosFenologicosService],
})
export class EstadiosFenologicosModule {}

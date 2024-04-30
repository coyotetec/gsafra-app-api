import { Module } from '@nestjs/common';
import { PatrimoniosService } from './patrimonios.service';
import { PatrimoniosController } from './patrimonios.controller';

@Module({
  controllers: [PatrimoniosController],
  providers: [PatrimoniosService],
})
export class PatrimoniosModule {}

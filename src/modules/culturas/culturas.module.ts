import { Module } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import { CulturasController } from './culturas.controller';

@Module({
  controllers: [CulturasController],
  providers: [CulturasService],
})
export class CulturasModule {}

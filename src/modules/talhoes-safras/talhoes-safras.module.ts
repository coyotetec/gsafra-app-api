import { Module } from '@nestjs/common';
import { TalhoesSafrasService } from './talhoes-safras.service';
import { TalhoesSafrasController } from './talhoes-safras.controller';

@Module({
  controllers: [TalhoesSafrasController],
  providers: [TalhoesSafrasService],
})
export class TalhoesSafrasModule {}

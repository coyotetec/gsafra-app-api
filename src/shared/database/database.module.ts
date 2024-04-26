import { Global, Module } from '@nestjs/common';
import { FirebirdService } from './firebird/firebird.service';

@Global()
@Module({
  providers: [FirebirdService],
})
export class DatabaseModule {}

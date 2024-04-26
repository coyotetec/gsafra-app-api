import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [DatabaseModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

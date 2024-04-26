import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';

@Module({
  imports: [DatabaseModule, UsuariosModule, AbastecimentosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

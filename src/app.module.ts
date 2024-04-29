import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { PatrimoniosModule } from './modules/patrimonios/patrimonios.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    AbastecimentosModule,
    PatrimoniosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

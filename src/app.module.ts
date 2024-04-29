import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { AbastecimentosCiclosModule } from './modules/abastecimentos-ciclos/abastecimentos-ciclos.module';
import { AbastecimentosCiclosTalhoesSafrasModule } from './modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';
import { PlanejamentosAtividadesModule } from './modules/planejamentos-atividades/planejamentos-atividades.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    AbastecimentosModule,
    AbastecimentosCiclosModule,
    AbastecimentosCiclosTalhoesSafrasModule,
    PlanejamentosAtividadesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

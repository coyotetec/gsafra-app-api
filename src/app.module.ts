import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { AbastecimentosCiclosModule } from './modules/abastecimentos-ciclos/abastecimentos-ciclos.module';
import { AbastecimentosCiclosTalhoesSafrasModule } from './modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';
import { PlanejamentosAtividadesModule } from './modules/planejamentos-atividades/planejamentos-atividades.module';
import { PlanejamentosAtividadesInsumosModule } from './modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.module';
import { PlanejamentosAtividadesMaquinasModule } from './modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.module';
import { PlanejamentosAtividadesTalhoesSafrasModule } from './modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    AbastecimentosModule,
    AbastecimentosCiclosModule,
    AbastecimentosCiclosTalhoesSafrasModule,
    PlanejamentosAtividadesModule,
    PlanejamentosAtividadesInsumosModule,
    PlanejamentosAtividadesMaquinasModule,
    PlanejamentosAtividadesTalhoesSafrasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

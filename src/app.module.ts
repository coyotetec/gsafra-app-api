import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { PatrimoniosModule } from './modules/patrimonios/patrimonios.module';
import { AbastecimentosCiclosModule } from './modules/abastecimentos-ciclos/abastecimentos-ciclos.module';
import { AbastecimentosCiclosTalhoesSafrasModule } from './modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';
import { AlmoxarifadosModule } from './modules/almoxarifados/almoxarifados.module';
import { ProdutosAlmoxarifadoModule } from './modules/produtos-almoxarifado/produtos-almoxarifado.module';
import { UnidadesModule } from './modules/unidades/unidades.module';
import { CulturasModule } from './modules/culturas/culturas.module';
import { SafrasModule } from './modules/safras/safras.module';
import { PlanejamentosAtividadesModule } from './modules/planejamentos-atividades/planejamentos-atividades.module';
import { PlanejamentosAtividadesInsumosModule } from './modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.module';
import { PlanejamentosAtividadesMaquinasModule } from './modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.module';
import { PlanejamentosAtividadesTalhoesSafrasModule } from './modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.module';
import { AtividadesAgricolasModule } from './modules/atividades-agricolas/atividades-agricolas.module';
import { AtividadesAgricolasInsumosModule } from './modules/atividades-agricolas-insumos/atividades-agricolas-insumos.module';
import { AtividadesAgricolasMaquinasModule } from './modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.module';
import { AtividadesAgricolasTalhoesSafrasModule } from './modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    AbastecimentosModule,
    PatrimoniosModule,
    AbastecimentosCiclosModule,
    AbastecimentosCiclosTalhoesSafrasModule,
    AlmoxarifadosModule,
    ProdutosAlmoxarifadoModule,
    UnidadesModule,
    CulturasModule,
    SafrasModule,
    PlanejamentosAtividadesModule,
    PlanejamentosAtividadesInsumosModule,
    PlanejamentosAtividadesMaquinasModule,
    PlanejamentosAtividadesTalhoesSafrasModule,
    AtividadesAgricolasModule,
    AtividadesAgricolasInsumosModule,
    AtividadesAgricolasMaquinasModule,
    AtividadesAgricolasTalhoesSafrasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

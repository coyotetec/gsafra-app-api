import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { PatrimoniosModule } from './modules/patrimonios/patrimonios.module';
import { AlmoxarifadosModule } from './modules/almoxarifados/almoxarifados.module';
import { ProdutosAlmoxarifadoModule } from './modules/produtos-almoxarifado/produtos-almoxarifado.module';
import { UnidadesModule } from './modules/unidades/unidades.module';
import { CulturasModule } from './modules/culturas/culturas.module';
import { SafrasModule } from './modules/safras/safras.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { AbastecimentosCiclosModule } from './modules/abastecimentos-ciclos/abastecimentos-ciclos.module';
import { AbastecimentosCiclosTalhoesSafrasModule } from './modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';
import { PlanejamentosAtividadesModule } from './modules/planejamentos-atividades/planejamentos-atividades.module';
import { PlanejamentosAtividadesInsumosModule } from './modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.module';
import { PlanejamentosAtividadesMaquinasModule } from './modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.module';
import { PlanejamentosAtividadesTalhoesSafrasModule } from './modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.module';
import { AtividadesAgricolasModule } from './modules/atividades-agricolas/atividades-agricolas.module';
import { AtividadesAgricolasInsumosModule } from './modules/atividades-agricolas-insumos/atividades-agricolas-insumos.module';
import { AtividadesAgricolasMaquinasModule } from './modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.module';
import { AtividadesAgricolasTalhoesSafrasModule } from './modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.module';
import { TalhoesModule } from './modules/talhoes/talhoes.module';
import { VariedadesModule } from './modules/variedades/variedades.module';
import { TalhoesSafrasModule } from './modules/talhoes-safras/talhoes-safras.module';
import { TiposAtividadesModule } from './modules/tipos-atividades/tipos-atividades.module';
import { FasesAplicacaoModule } from './modules/fases-aplicacao/fases-aplicacao.module';
import { TiposAplicacaoModule } from './modules/tipos-aplicacao/tipos-aplicacao.module';
import { EstadiosFenologicosModule } from './modules/estadios-fenologicos/estadios-fenologicos.module';
import { DashboardFinanceiroModule } from './modules/dashboard-financeiro/dashboard-financeiro.module';
import { DashboardIndicadoresModule } from './modules/dashboard-indicadores/dashboard-indicadores.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    PatrimoniosModule,
    AlmoxarifadosModule,
    ProdutosAlmoxarifadoModule,
    UnidadesModule,
    CulturasModule,
    SafrasModule,
    AbastecimentosModule,
    AbastecimentosCiclosModule,
    AbastecimentosCiclosTalhoesSafrasModule,
    PlanejamentosAtividadesModule,
    PlanejamentosAtividadesInsumosModule,
    PlanejamentosAtividadesMaquinasModule,
    PlanejamentosAtividadesTalhoesSafrasModule,
    AtividadesAgricolasModule,
    AtividadesAgricolasInsumosModule,
    AtividadesAgricolasMaquinasModule,
    AtividadesAgricolasTalhoesSafrasModule,
    TalhoesModule,
    VariedadesModule,
    TalhoesSafrasModule,
    TiposAtividadesModule,
    FasesAplicacaoModule,
    TiposAplicacaoModule,
    EstadiosFenologicosModule,
    DashboardFinanceiroModule,
    DashboardIndicadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

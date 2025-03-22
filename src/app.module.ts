import { Module } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasModule } from './modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';
import { AbastecimentosCiclosModule } from './modules/abastecimentos-ciclos/abastecimentos-ciclos.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { AlmoxarifadosModule } from './modules/almoxarifados/almoxarifados.module';
import { AtividadesAgricolasInsumosModule } from './modules/atividades-agricolas-insumos/atividades-agricolas-insumos.module';
import { AtividadesAgricolasMaquinasModule } from './modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.module';
import { AtividadesAgricolasTalhoesSafrasModule } from './modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.module';
import { AtividadesAgricolasModule } from './modules/atividades-agricolas/atividades-agricolas.module';
import { CulturasModule } from './modules/culturas/culturas.module';
import { DashboardCustoProducaoModule } from './modules/dashboard-custo-producao/dashboard-custo-producao.module';
import { DashboardEstoqueGraosModule } from './modules/dashboard-estoque-graos/dashboard-estoque-graos.module';
import { DashboardFinanceiroModule } from './modules/dashboard-financeiro/dashboard-financeiro.module';
import { DashboardIndicadoresModule } from './modules/dashboard-indicadores/dashboard-indicadores.module';
import { DispositivosModule } from './modules/dispositivos/dispositivos.module';
import { EstadiosFenologicosModule } from './modules/estadios-fenologicos/estadios-fenologicos.module';
import { FasesAplicacaoModule } from './modules/fases-aplicacao/fases-aplicacao.module';
import { ManutencaoModule } from './modules/manutencao/manutencao.module';
import { PatrimoniosModule } from './modules/patrimonios/patrimonios.module';
import { PlanejamentosAtividadesInsumosModule } from './modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.module';
import { PlanejamentosAtividadesMaquinasModule } from './modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.module';
import { PlanejamentosAtividadesTalhoesSafrasModule } from './modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.module';
import { PlanejamentosAtividadesModule } from './modules/planejamentos-atividades/planejamentos-atividades.module';
import { ProdutosAlmoxarifadoModule } from './modules/produtos-almoxarifado/produtos-almoxarifado.module';
import { RequisicaoProdutoModule } from './modules/requisicao-produto/requisicao-produto.module';
import { RequisicaoModule } from './modules/requisicao/requisicao.module';
import { SafrasModule } from './modules/safras/safras.module';
import { TalhoesSafrasModule } from './modules/talhoes-safras/talhoes-safras.module';
import { TalhoesModule } from './modules/talhoes/talhoes.module';
import { TiposAplicacaoModule } from './modules/tipos-aplicacao/tipos-aplicacao.module';
import { TiposAtividadesModule } from './modules/tipos-atividades/tipos-atividades.module';
import { UnidadesModule } from './modules/unidades/unidades.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { VariedadesModule } from './modules/variedades/variedades.module';
import { DatabaseModule } from './shared/database/database.module';
import { ManutencaoServicoModule } from './modules/manutencao-servico/manutencao-servico.module';
import { TiposManutencaoModule } from './modules/tipos-manutencao/tipos-manutencao.module';
import { ManutencaoCicloModule } from './modules/manutencao-ciclo/manutencao-ciclo.module';
import { ManutencaoServicoProdutoModule } from './modules/manutencao-servico-produto/manutencao-servico-produto.module';
import { FornecedorModule } from './modules/fornecedor/fornecedor.module';
import { EstoqueModule } from './modules/estoque/estoque.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    PatrimoniosModule,
    ManutencaoModule,
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
    DashboardEstoqueGraosModule,
    DashboardCustoProducaoModule,
    DispositivosModule,
    RequisicaoProdutoModule,
    RequisicaoModule,
    ManutencaoServicoModule,
    TiposManutencaoModule,
    ManutencaoServicoProdutoModule,
    ManutencaoCicloModule,
    FornecedorModule,
    EstoqueModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

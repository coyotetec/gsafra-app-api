import { Global, Module } from '@nestjs/common';
import { FirebirdService } from './firebird/firebird.service';

import { AbastecimentosCiclosTalhoesSafrasRepository } from 'src/modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { AbastecimentosCiclosRepository } from 'src/modules/abastecimentos-ciclos/abastecimentos-ciclos.repository';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';
import { AlmoxarifadosRepository } from 'src/modules/almoxarifados/almoxarifados.repository';
import { AtividadesAgricolasInsumosRepository } from 'src/modules/atividades-agricolas-insumos/atividades-agricolas-insumos.repository';
import { AtividadesAgricolasMaquinasRepository } from 'src/modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.repository';
import { AtividadesAgricolasTalhoesSafrasRepository } from 'src/modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.repository';
import { AtividadesAgricolasRepository } from 'src/modules/atividades-agricolas/atividades-agricolas.repository';
import { CulturasRepository } from 'src/modules/culturas/culturas.repository';
import { PatrimoniosRepository } from 'src/modules/patrimonios/patrimonios.repository';
import { PlanejamentosAtividadesInsumosRepository } from 'src/modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.repository';
import { PlanejamentosAtividadesMaquinasRepository } from 'src/modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.repository';
import { PlanejamentosAtividadesTalhoesSafrasRepository } from 'src/modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.repository';
import { PlanejamentosAtividadesRepository } from 'src/modules/planejamentos-atividades/planejamentos-atividades.repository';
import { ProdutosAlmoxarifadoRepository } from 'src/modules/produtos-almoxarifado/produtos-almoxarifado.repository';
import { SafrasRepository } from 'src/modules/safras/safras.repository';
import { UnidadesRepository } from 'src/modules/unidades/unidades.repository';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';

import { DashboardCustoProducaoRepository } from 'src/modules/dashboard-custo-producao/dashboard-custo-producao.repository';
import { DashboardEstoqueGraosRepository } from 'src/modules/dashboard-estoque-graos/dashboard-estoque-graos.repository';
import { DashboardFinanceiroRepository } from 'src/modules/dashboard-financeiro/dashboard-financeiro.repository';
import { DashboardIndicadoresRepository } from 'src/modules/dashboard-indicadores/dashboard-indicadores.repository';
import { DispositivosRepository } from 'src/modules/dispositivos/dispositivos.repository';
import { EstadiosFenologicosRepository } from 'src/modules/estadios-fenologicos/estadios-fenologicos.repository';
import { FasesAplicacaoRepository } from 'src/modules/fases-aplicacao/fases-aplicacao.repository';
import { ManutencaoServicoRepository } from 'src/modules/manutencao-servico/manutencao-servico.repository';
import { ManutencaoRepository } from 'src/modules/manutencao/manutencao.repository';
import { RequisicaoProdutoRepository } from 'src/modules/requisicao-produto/requisicao-produto.repository';
import { RequisicaoRepository } from 'src/modules/requisicao/requisicao.repository';
import { TalhoesSafrasRepository } from 'src/modules/talhoes-safras/talhoes-safras.repository';
import { TalhoesRepository } from 'src/modules/talhoes/talhoes.repository';
import { TiposAplicacaoRepository } from 'src/modules/tipos-aplicacao/tipos-aplicacao.repository';
import { TiposAtividadesRepository } from 'src/modules/tipos-atividades/tipos-atividades.repository';
import { TiposManutencaoRepository } from 'src/modules/tipos-manutencao/tipos-manutencao.repository';
import { VariedadesRepository } from 'src/modules/variedades/variedades.repository';
import { FirebirdAbastecimentosCiclosTalhoesSafrasRepository } from './firebird/repositories/firebird-abastecimentos-ciclos-talhoes-safras.repository';
import { FirebirdAbastecimentosCiclosRepository } from './firebird/repositories/firebird-abastecimentos-ciclos.repository';
import { FirebirdAbastecimentosRepository } from './firebird/repositories/firebird-abastecimentos.repository';
import { FirebirdAlmoxarifadosRepository } from './firebird/repositories/firebird-almoxarifados.repository';
import { FirebirdAtividadesAgricolasInsumosRepository } from './firebird/repositories/firebird-atividades-agricolas-insumos.repository';
import { FirebirdAtividadesAgricolasMaquinasRepository } from './firebird/repositories/firebird-atividades-agricolas-maquinas.repository';
import { FirebirdAtividadesAgricolasTalhoesSafrasRepository } from './firebird/repositories/firebird-atividades-agricolas-talhoes-safras.repository';
import { FirebirdAtividadesAgricolasRepository } from './firebird/repositories/firebird-atividades-agricolas.repository';
import { FirebirdCulturasRepository } from './firebird/repositories/firebird-culturas.repository';
import { FirebirdDashboardCustoProducaoRepository } from './firebird/repositories/firebird-dashboard-custo-producao.repository';
import { FirebirdDashboardEstoqueGraosRepository } from './firebird/repositories/firebird-dashboard-estoque-graos.repository';
import { FirebirdDashboardFinanceiroRepository } from './firebird/repositories/firebird-dashboard-financeiro.repository';
import { FirebirdDashboardIndicadoresRepository } from './firebird/repositories/firebird-dashboard-indicadores.repository';
import { FirebirdDispositivosRepository } from './firebird/repositories/firebird-dispositivos.repository';
import { FirebirdEstadiosFenologicosRepository } from './firebird/repositories/firebird-estadios-fenologicos.repository';
import { FirebirdFasesAplicacaoRepository } from './firebird/repositories/firebird-fases-aplicacao.repository';
import { FirebirdManutencaoServicoRepositoryData } from './firebird/repositories/firebird-manutencao-servico.repository';
import { FirebirdManutencaoRepositoryData } from './firebird/repositories/firebird-manutencao.repository';
import { FirebirdPatrimoniosRepository } from './firebird/repositories/firebird-patrimonios.repository';
import { FirebirdPlanejamentosAtividadesInsumosRepository } from './firebird/repositories/firebird-planejamentos-atividades-insumos.repository';
import { FirebirdPlanejamentosAtividadesMaquinasRepository } from './firebird/repositories/firebird-planejamentos-atividades-maquinas.repository';
import { FirebirdPlanejamentosAtividadesTalhoesSafrasRepository } from './firebird/repositories/firebird-planejamentos-atividades-talhoes-safras.repository';
import { FirebirdPlanejamentosAtividadesRepository } from './firebird/repositories/firebird-planejamentos-atividades.repository';
import { FirebirdProdutosAlmoxarifadoRepository } from './firebird/repositories/firebird-produtos-almoxarifado.repository';
import { FirebirdRequisicaoProdutoRepository } from './firebird/repositories/firebird-requisicao-produto.repository';
import { FirebirdRequisicaoRepository } from './firebird/repositories/firebird-requisicao.repository';
import { FirebirdSafrasRepository } from './firebird/repositories/firebird-safras.repository';
import { FirebirdTalhoesSafraRepository } from './firebird/repositories/firebird-talhoes-safras.repository';
import { FireBirdTalhoesRepository } from './firebird/repositories/firebird-talhoes.repository';
import { FirebirdTiposAplicacaoRepository } from './firebird/repositories/firebird-tipos-aplicacao.repository';
import { FirebirdTiposAtividadesRepository } from './firebird/repositories/firebird-tipos-atividades.repository';
import { FirebirdTiposManutencaoRepository } from './firebird/repositories/firebird-tipos-manutencao.repository';
import { FirebirdUnidadesRepository } from './firebird/repositories/firebird-unidades.repository';
import { FirebirdUsuariosRepository } from './firebird/repositories/firebird-usuarios.repository';
import { FirebirdVariedadesRepository } from './firebird/repositories/firebird-variedades.repository';
import { ManutencaoCicloRepository } from 'src/modules/manutencao-ciclo/manutencao-ciclo.repository';
import { FirebirdManutencaoCicloRepositoryData } from './firebird/repositories/firebird-manutencao-ciclo.repository';
import { ManutencaoServicoProduto } from 'src/modules/manutencao-servico-produto/entities/manutencao.entity';
import { FirebirdManutencaoServicoProdutoRepositoryData } from './firebird/repositories/firebird-manutencao-servico-produto.repository';
import { ManutencaoServicoProdutoRepository } from 'src/modules/manutencao-servico-produto/manutencao-servico-produto.repository';
import { FornecedorRepository } from 'src/modules/fornecedor/fornecedor.repository';
import { FirebirdFornecedorRepositoryData } from './firebird/repositories/firebird-fornecedor.repository';

@Global()
@Module({
  providers: [
    FirebirdService,
    { provide: ManutencaoRepository, useClass: FirebirdManutencaoRepositoryData },
    { provide: UsuariosRepository, useClass: FirebirdUsuariosRepository },
    { provide: PatrimoniosRepository, useClass: FirebirdPatrimoniosRepository },
    {
      provide: AlmoxarifadosRepository,
      useClass: FirebirdAlmoxarifadosRepository,
    },
    {
      provide: ProdutosAlmoxarifadoRepository,
      useClass: FirebirdProdutosAlmoxarifadoRepository,
    },
    {
      provide: UnidadesRepository,
      useClass: FirebirdUnidadesRepository,
    },
    { provide: CulturasRepository, useClass: FirebirdCulturasRepository },
    { provide: SafrasRepository, useClass: FirebirdSafrasRepository },
    {
      provide: AbastecimentosRepository,
      useClass: FirebirdAbastecimentosRepository,
    },
    {
      provide: AbastecimentosCiclosRepository,
      useClass: FirebirdAbastecimentosCiclosRepository,
    },
    {
      provide: AbastecimentosCiclosTalhoesSafrasRepository,
      useClass: FirebirdAbastecimentosCiclosTalhoesSafrasRepository,
    },
    {
      provide: PlanejamentosAtividadesRepository,
      useClass: FirebirdPlanejamentosAtividadesRepository,
    },
    {
      provide: PlanejamentosAtividadesInsumosRepository,
      useClass: FirebirdPlanejamentosAtividadesInsumosRepository,
    },
    {
      provide: PlanejamentosAtividadesMaquinasRepository,
      useClass: FirebirdPlanejamentosAtividadesMaquinasRepository,
    },
    {
      provide: PlanejamentosAtividadesTalhoesSafrasRepository,
      useClass: FirebirdPlanejamentosAtividadesTalhoesSafrasRepository,
    },
    {
      provide: TiposManutencaoRepository,
      useClass: FirebirdTiposManutencaoRepository,
    },
    {
      provide: AtividadesAgricolasRepository,
      useClass: FirebirdAtividadesAgricolasRepository,
    },
    {
      provide: AtividadesAgricolasInsumosRepository,
      useClass: FirebirdAtividadesAgricolasInsumosRepository,
    },
    {
      provide: AtividadesAgricolasMaquinasRepository,
      useClass: FirebirdAtividadesAgricolasMaquinasRepository,
    },
    {
      provide: AtividadesAgricolasTalhoesSafrasRepository,
      useClass: FirebirdAtividadesAgricolasTalhoesSafrasRepository,
    },
    { provide: TalhoesRepository, useClass: FireBirdTalhoesRepository },
    { provide: VariedadesRepository, useClass: FirebirdVariedadesRepository },
    {
      provide: TalhoesSafrasRepository,
      useClass: FirebirdTalhoesSafraRepository,
    },
    {
      provide: TiposAtividadesRepository,
      useClass: FirebirdTiposAtividadesRepository,
    },
    {
      provide: FasesAplicacaoRepository,
      useClass: FirebirdFasesAplicacaoRepository,
    },
    {
      provide: TiposAplicacaoRepository,
      useClass: FirebirdTiposAplicacaoRepository,
    },
    {
      provide: EstadiosFenologicosRepository,
      useClass: FirebirdEstadiosFenologicosRepository,
    },
    {
      provide: DashboardFinanceiroRepository,
      useClass: FirebirdDashboardFinanceiroRepository,
    },
    {
      provide: DashboardIndicadoresRepository,
      useClass: FirebirdDashboardIndicadoresRepository,
    },
    {
      provide: DashboardEstoqueGraosRepository,
      useClass: FirebirdDashboardEstoqueGraosRepository,
    },
    {
      provide: DashboardCustoProducaoRepository,
      useClass: FirebirdDashboardCustoProducaoRepository,
    },
    {
      provide: DispositivosRepository,
      useClass: FirebirdDispositivosRepository,
    },
    {
      provide: RequisicaoRepository,
      useClass: FirebirdRequisicaoRepository,
    },
    {
      provide: RequisicaoProdutoRepository,
      useClass: FirebirdRequisicaoProdutoRepository,
    },
    {
      provide: ManutencaoServicoRepository,
      useClass: FirebirdManutencaoServicoRepositoryData,
    },
    {
      provide: ManutencaoCicloRepository,
      useClass: FirebirdManutencaoCicloRepositoryData,
    },
    {
      provide: ManutencaoServicoProdutoRepository,
      useClass: FirebirdManutencaoServicoProdutoRepositoryData,
    },
    {
      provide: FornecedorRepository,
      useClass: FirebirdFornecedorRepositoryData,
    },
  ],
  exports: [
    ManutencaoRepository,
    ManutencaoServicoRepository,
    UsuariosRepository,
    PatrimoniosRepository,
    AlmoxarifadosRepository,
    ProdutosAlmoxarifadoRepository,
    UnidadesRepository,
    CulturasRepository,
    SafrasRepository,
    AbastecimentosRepository,
    AbastecimentosCiclosRepository,
    AbastecimentosCiclosTalhoesSafrasRepository,
    PlanejamentosAtividadesRepository,
    PlanejamentosAtividadesInsumosRepository,
    PlanejamentosAtividadesMaquinasRepository,
    PlanejamentosAtividadesTalhoesSafrasRepository,
    AtividadesAgricolasRepository,
    AtividadesAgricolasInsumosRepository,
    AtividadesAgricolasMaquinasRepository,
    AtividadesAgricolasTalhoesSafrasRepository,
    TalhoesRepository,
    VariedadesRepository,
    TalhoesSafrasRepository,
    TiposAtividadesRepository,
    FasesAplicacaoRepository,
    TiposAplicacaoRepository,
    EstadiosFenologicosRepository,
    DashboardFinanceiroRepository,
    DashboardIndicadoresRepository,
    DashboardEstoqueGraosRepository,
    DashboardCustoProducaoRepository,
    DispositivosRepository,
    RequisicaoRepository,
    RequisicaoProdutoRepository,
    TiposManutencaoRepository, 
    ManutencaoCicloRepository,
    ManutencaoServicoRepository,
    ManutencaoServicoProdutoRepository,
    FornecedorRepository
  ],
})
export class DatabaseModule { }

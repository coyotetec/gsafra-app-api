import { Global, Module } from '@nestjs/common';
import { FirebirdService } from './firebird/firebird.service';

import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { PatrimoniosRepository } from 'src/modules/patrimonios/patrimonios.repository';
import { AlmoxarifadosRepository } from 'src/modules/almoxarifados/almoxarifados.repository';
import { ProdutosAlmoxarifadoRepository } from 'src/modules/produtos-almoxarifado/produtos-almoxarifado.repository';
import { UnidadesRepository } from 'src/modules/unidades/unidades.repository';
import { CulturasRepository } from 'src/modules/culturas/culturas.repository';
import { SafrasRepository } from 'src/modules/safras/safras.repository';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';
import { AbastecimentosCiclosRepository } from 'src/modules/abastecimentos-ciclos/abastecimentos-ciclos.repository';
import { AbastecimentosCiclosTalhoesSafrasRepository } from 'src/modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { PlanejamentosAtividadesRepository } from 'src/modules/planejamentos-atividades/planejamentos-atividades.repository';
import { PlanejamentosAtividadesInsumosRepository } from 'src/modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.repository';
import { PlanejamentosAtividadesMaquinasRepository } from 'src/modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.repository';
import { PlanejamentosAtividadesTalhoesSafrasRepository } from 'src/modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.repository';
import { AtividadesAgricolasRepository } from 'src/modules/atividades-agricolas/atividades-agricolas.repository';
import { AtividadesAgricolasInsumosRepository } from 'src/modules/atividades-agricolas-insumos/atividades-agricolas-insumos.repository';
import { AtividadesAgricolasMaquinasRepository } from 'src/modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.repository';
import { AtividadesAgricolasTalhoesSafrasRepository } from 'src/modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.repository';

import { FirebirdUsuariosRepository } from './firebird/repositories/firebird-usuarios.repository';
import { FirebirdPatrimoniosRepository } from './firebird/repositories/firebird-patrimonios.repository';
import { FirebirdAlmoxarifadosRepository } from './firebird/repositories/firebird-almoxarifados.repository';
import { FirebirdProdutosAlmoxarifadoRepository } from './firebird/repositories/firebird-produtos-almoxarifado.repository';
import { FirebirdUnidadesRepository } from './firebird/repositories/firebird-unidades.repository';
import { FirebirdCulturasRepository } from './firebird/repositories/firebird-culturas.repository';
import { FirebirdSafrasRepository } from './firebird/repositories/firebird-safras.repository';
import { FirebirdAbastecimentosRepository } from './firebird/repositories/firebird-abastecimentos.repository';
import { FirebirdAbastecimentosCiclosRepository } from './firebird/repositories/firebird-abastecimentos-ciclos.repository';
import { FirebirdAbastecimentosCiclosTalhoesSafrasRepository } from './firebird/repositories/firebird-abastecimentos-ciclos-talhoes-safras.repository';
import { FirebirdPlanejamentosAtividadesRepository } from './firebird/repositories/firebird-planejamentos-atividades.repository';
import { FirebirdPlanejamentosAtividadesInsumosRepository } from './firebird/repositories/firebird-planejamentos-atividades-insumos.repository';
import { FirebirdPlanejamentosAtividadesMaquinasRepository } from './firebird/repositories/firebird-planejamentos-atividades-maquinas.repository';
import { FirebirdPlanejamentosAtividadesTalhoesSafrasRepository } from './firebird/repositories/firebird-planejamentos-atividades-talhoes-safras.repository';
import { FirebirdAtividadesAgricolasRepository } from './firebird/repositories/firebird-atividades-agricolas.repository';
import { FirebirdAtividadesAgricolasInsumosRepository } from './firebird/repositories/firebird-atividades-agricolas-insumos.repository';
import { FirebirdAtividadesAgricolasMaquinasRepository } from './firebird/repositories/firebird-atividades-agricolas-maquinas.repository';
import { FirebirdAtividadesAgricolasTalhoesSafrasRepository } from './firebird/repositories/firebird-atividades-agricolas-talhoes-safras.repository';
import { TalhoesRepository } from 'src/modules/talhoes/talhoes.repository';
import { FireBirdTalhoesRepository } from './firebird/repositories/firebird-talhoes.repository';
import { VariedadesRepository } from 'src/modules/variedades/variedades.repository';
import { FirebirdVariedadesRepository } from './firebird/repositories/firebird-variedades.repository';
import { TalhoesSafrasRepository } from 'src/modules/talhoes-safras/talhoes-safras.repository';
import { FirebirdTalhoesSafraRepository } from './firebird/repositories/firebird-talhoes-safras.repository';
import { TiposAtividadesRepository } from 'src/modules/tipos-atividades/tipos-atividades.repository';
import { FirebirdTiposAtividadesRepository } from './firebird/repositories/firebird-tipos-atividades.repository';
import { FasesAplicacaoRepository } from 'src/modules/fases-aplicacao/fases-aplicacao.repository';
import { FirebirdFasesAplicacaoRepository } from './firebird/repositories/firebird-fases-aplicacao.repository';
import { TiposAplicacaoRepository } from 'src/modules/tipos-aplicacao/tipos-aplicacao.repository';
import { FirebirdTiposAplicacaoRepository } from './firebird/repositories/firebird-tipos-aplicacao.repository';
import { EstadiosFenologicosRepository } from 'src/modules/estadios-fenologicos/estadios-fenologicos.repository';
import { FirebirdEstadiosFenologicosRepository } from './firebird/repositories/firebird-estadios-fenologicos.repository';

@Global()
@Module({
  providers: [
    FirebirdService,
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
  ],
  exports: [
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
  ],
})
export class DatabaseModule {}

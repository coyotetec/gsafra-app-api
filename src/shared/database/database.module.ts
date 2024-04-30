import { Global, Module } from '@nestjs/common';
import { FirebirdService } from './firebird/firebird.service';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { FirebirdUsuariosRepository } from './firebird/repositories/firebird-usuarios.repository';
import { FirebirdAbastecimentosRepository } from './firebird/repositories/firebird-abastecimentos.repository';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';
import { PatrimoniosRepository } from 'src/modules/patrimonios/patrimonios.repository';
import { FirebirdPatrimoniosRepository } from './firebird/repositories/firebird-patrimonios.repository';
import { AbastecimentosCiclosRepository } from 'src/modules/abastecimentos-ciclos/abastecimentos-ciclos.repository';
import { FirebirdAbastecimentosCiclosRepository } from './firebird/repositories/firebird-abastecimentos-ciclos.repository';
import { AbastecimentosCiclosTalhoesSafrasRepository } from 'src/modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { FirebirdAbastecimentosCiclosTalhoesSafrasRepository } from './firebird/repositories/firebird-abastecimentos-ciclos-talhoes-safras.repository';
import { AlmoxarifadosRepository } from 'src/modules/almoxarifados/almoxarifados.repository';
import { FirebirdAlmoxarifadosRepository } from './firebird/repositories/firebird-almoxarifados.repository';
import { ProdutosAlmoxarifadoRepository } from 'src/modules/produtos-almoxarifado/produtos-almoxarifado.repository';
import { FirebirdProdutosAlmoxarifadoRepository } from './firebird/repositories/firebird-produtos-almoxarifado.repository';
import { UnidadesRepository } from 'src/modules/unidades/unidades.repository';
import { FirebirdUnidadesRepository } from './firebird/repositories/firebird-unidades.repository';
import { CulturasRepository } from 'src/modules/culturas/culturas.repository';
import { FirebirdCulturasRepository } from './firebird/repositories/firebird-culturas.repository';
import { SafrasRepository } from 'src/modules/safras/safras.repository';
import { FirebirdSafrasRepository } from './firebird/repositories/firebird-safras.repository';
import { PlanejamentosAtividadesRepository } from 'src/modules/planejamentos-atividades/planejamentos-atividades.repository';
import { FirebirdPlanejamentosAtividadesRepository } from './firebird/repositories/firebird-planejamentos-atividades.repository';
import { PlanejamentosAtividadesInsumosRepository } from 'src/modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.repository';
import { FirebirdPlanejamentosAtividadesInsumosRepository } from './firebird/repositories/firebird-planejamentos-atividades-insumos.repository';
import { PlanejamentosAtividadesMaquinasRepository } from 'src/modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.repository';
import { FirebirdPlanejamentosAtividadesMaquinasRepository } from './firebird/repositories/firebird-planejamentos-atividades-maquinas.repository';
import { PlanejamentosAtividadesTalhoesSafrasRepository } from 'src/modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.repository';
import { FirebirdPlanejamentosAtividadesTalhoesSafrasRepository } from './firebird/repositories/firebird-planejamentos-atividades-talhoes-safras.repository';
import { AtividadesAgricolasRepository } from 'src/modules/atividades-agricolas/atividades-agricolas.repository';
import { FirebirdAtividadesAgricolasRepository } from './firebird/repositories/firebird-atividades-agricolas.repository';
import { AtividadesAgricolasInsumosRepository } from 'src/modules/atividades-agricolas-insumos/atividades-agricolas-insumos.repository';
import { FirebirdAtividadesAgricolasInsumosRepository } from './firebird/repositories/firebird-atividades-agricolas-insumos.repository';
import { AtividadesAgricolasMaquinasRepository } from 'src/modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.repository';
import { FirebirdAtividadesAgricolasMaquinasRepository } from './firebird/repositories/firebird-atividades-agricolas-maquinas.repository';
import { AtividadesAgricolasTalhoesSafrasRepository } from 'src/modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.repository';
import { FirebirdAtividadesAgricolasTalhoesSafrasRepository } from './firebird/repositories/firebird-atividades-agricolas-talhoes-safras.repository';

@Global()
@Module({
  providers: [
    FirebirdService,
    { provide: UsuariosRepository, useClass: FirebirdUsuariosRepository },
    {
      provide: AbastecimentosRepository,
      useClass: FirebirdAbastecimentosRepository,
    },
    { provide: PatrimoniosRepository, useClass: FirebirdPatrimoniosRepository },
    {
      provide: AbastecimentosCiclosRepository,
      useClass: FirebirdAbastecimentosCiclosRepository,
    },
    {
      provide: AbastecimentosCiclosTalhoesSafrasRepository,
      useClass: FirebirdAbastecimentosCiclosTalhoesSafrasRepository,
    },
    {
      provide: AlmoxarifadosRepository,
      useClass: FirebirdAlmoxarifadosRepository,
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
  ],
  exports: [
    UsuariosRepository,
    AbastecimentosRepository,
    PatrimoniosRepository,
    AbastecimentosCiclosRepository,
    AbastecimentosCiclosTalhoesSafrasRepository,
    AlmoxarifadosRepository,
    ProdutosAlmoxarifadoRepository,
    UnidadesRepository,
    CulturasRepository,
    SafrasRepository,
    PlanejamentosAtividadesRepository,
    PlanejamentosAtividadesInsumosRepository,
    PlanejamentosAtividadesMaquinasRepository,
    PlanejamentosAtividadesTalhoesSafrasRepository,
    AtividadesAgricolasRepository,
    AtividadesAgricolasInsumosRepository,
    AtividadesAgricolasMaquinasRepository,
    AtividadesAgricolasTalhoesSafrasRepository,
  ],
})
export class DatabaseModule {}

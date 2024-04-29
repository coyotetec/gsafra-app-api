import { Global, Module } from '@nestjs/common';
import { FirebirdService } from './firebird/firebird.service';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { FirebirdUsuariosRepository } from './firebird/repositories/firebird-usuarios.repository';
import { FirebirdAbastecimentosRepository } from './firebird/repositories/firebird-abastecimentos.repository';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';
import { AbastecimentosCiclosRepository } from 'src/modules/abastecimentos-ciclos/abastecimentos-ciclos.repository';
import { FirebirdAbastecimentosCiclosRepository } from './firebird/repositories/firebird-abastecimentos-ciclos.repository';
import { AbastecimentosCiclosTalhoesSafrasRepository } from 'src/modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { FirebirdAbastecimentosCiclosTalhoesSafrasRepository } from './firebird/repositories/firebird-abastecimentos-ciclos-talhoes-safras.repository';
import { PatrimoniosRepository } from 'src/modules/patrimonios/patrimonios.repository';
import { FirebirdPatrimoniosRepository } from './firebird/repositories/firebird-patrimonios.repository';
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

@Global()
@Module({
  providers: [
    FirebirdService,
    { provide: UsuariosRepository, useClass: FirebirdUsuariosRepository },
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
  ],
  exports: [
    UsuariosRepository,
    AbastecimentosRepository,
    AbastecimentosCiclosRepository,
    AbastecimentosCiclosTalhoesSafrasRepository,
    PatrimoniosRepository,
    AlmoxarifadosRepository,
    ProdutosAlmoxarifadoRepository,
    UnidadesRepository,
    CulturasRepository,
    SafrasRepository,
  ],
})
export class DatabaseModule {}

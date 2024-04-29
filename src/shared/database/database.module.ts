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
import { PlanejamentosAtividadesRepository } from 'src/modules/planejamentos-atividades/planejamentos-atividades.repository';
import { FirebirdPlanejamentosAtividadesRepository } from './firebird/repositories/firebird-planejamentos-atividades.repository';

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
    {
      provide: PlanejamentosAtividadesRepository,
      useClass: FirebirdPlanejamentosAtividadesRepository,
    },
  ],
  exports: [
    UsuariosRepository,
    AbastecimentosRepository,
    AbastecimentosCiclosRepository,
    AbastecimentosCiclosTalhoesSafrasRepository,
    PlanejamentosAtividadesRepository,
  ],
})
export class DatabaseModule {}

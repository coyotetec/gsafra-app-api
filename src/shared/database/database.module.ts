import { Global, Module } from '@nestjs/common';
import { FirebirdService } from './firebird/firebird.service';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { FirebirdUsuariosRepository } from './firebird/repositories/firebird-usuarios.repository';
import { FirebirdAbastecimentosRepository } from './firebird/repositories/firebird-abastecimentos.repository';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';

@Global()
@Module({
  providers: [
    FirebirdService,
    { provide: UsuariosRepository, useClass: FirebirdUsuariosRepository },
    {
      provide: AbastecimentosRepository,
      useClass: FirebirdAbastecimentosRepository,
    },
  ],
  exports: [UsuariosRepository, AbastecimentosRepository],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AbastecimentosModule } from './modules/abastecimentos/abastecimentos.module';
import { AbastecimentosCiclosModule } from './modules/abastecimentos-ciclos/abastecimentos-ciclos.module';
import { AbastecimentosCiclosTalhoesSafrasModule } from './modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.module';
import { PatrimoniosModule } from './modules/patrimonios/patrimonios.module';
import { AlmoxarifadosModule } from './modules/almoxarifados/almoxarifados.module';
import { ProdutosAlmoxarifadoModule } from './modules/produtos-almoxarifado/produtos-almoxarifado.module';
import { UnidadesModule } from './modules/unidades/unidades.module';

@Module({
  imports: [
    DatabaseModule,
    UsuariosModule,
    AbastecimentosModule,
    AbastecimentosCiclosModule,
    AbastecimentosCiclosTalhoesSafrasModule,
    PatrimoniosModule,
    AlmoxarifadosModule,
    ProdutosAlmoxarifadoModule,
    UnidadesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

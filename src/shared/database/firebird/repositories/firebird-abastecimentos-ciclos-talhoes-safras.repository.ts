import { FirebirdService } from '../firebird.service';
import { Injectable } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasRepository } from 'src/modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { AbastecimentoCicloTalhaoSafra } from 'src/modules/abastecimentos-ciclos-talhoes-safras/entities/abastecimento-ciclo-talhao-safra.entity';
import { FirebirdAbastecimentosCiclosTalhoesSafrasMapper } from '../mappers/firebird-abastecimentos-ciclos-talhoes-safras.mapper';

@Injectable()
export class FirebirdAbastecimentosCiclosTalhoesSafrasRepository
  implements AbastecimentosCiclosTalhoesSafrasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AbastecimentoCicloTalhaoSafra>(
      host,
      code,
      'SELECT * FROM abastecimento_ciclo_ts',
      FirebirdAbastecimentosCiclosTalhoesSafrasMapper.toDomain,
    );
  }
}

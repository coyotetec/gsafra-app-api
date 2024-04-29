import { AbastecimentosCiclosRepository } from 'src/modules/abastecimentos-ciclos/abastecimentos-ciclos.repository';
import { FirebirdService } from '../firebird.service';
import { AbastecimentoCiclo } from 'src/modules/abastecimentos-ciclos/entities/abastecimento-ciclo.entity';
import { FirebirdAbastecimentosCiclosMapper } from '../mappers/firebird-abastecimentos-ciclos.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebirdAbastecimentosCiclosRepository
  implements AbastecimentosCiclosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AbastecimentoCiclo>(
      host,
      code,
      'SELECT * FROM abastecimento_ciclo',
      FirebirdAbastecimentosCiclosMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';
import { FirebirdService } from '../firebird.service';
import { Abastecimento } from 'src/modules/abastecimentos/entities/abastecimento.entity';
import { FirebirdAbastecimentosMapper } from '../mappers/firebird-abastecimentos.mapper';

@Injectable()
export class FirebirdAbastecimentosRepository
  implements AbastecimentosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<Abastecimento>(
      host,
      code,
      'SELECT * FROM abastecimento',
      FirebirdAbastecimentosMapper.toDomain,
    );
  }
}

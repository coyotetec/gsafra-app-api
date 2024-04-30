import { Injectable } from '@nestjs/common';
import { PlanejamentosAtividadesRepository } from 'src/modules/planejamentos-atividades/planejamentos-atividades.repository';
import { FirebirdService } from '../firebird.service';
import { PlanejamentoAtividade } from 'src/modules/planejamentos-atividades/entities/planejamento-atividade.entity';
import { FirebirdPlanejamentosAtividadesMapper } from '../mappers/firebird-planejamentos-atividades.mapper';

@Injectable()
export class FirebirdPlanejamentosAtividadesRepository
  implements PlanejamentosAtividadesRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<PlanejamentoAtividade>(
      host,
      code,
      'SELECT * FROM plan_atv',
      FirebirdPlanejamentosAtividadesMapper.toDomain,
    );
  }
}

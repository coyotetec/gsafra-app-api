import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { PlanejamentosAtividadesTalhoesSafrasRepository } from 'src/modules/planejamentos-atividades-talhoes-safras/planejamentos-atividades-talhoes-safras.repository';
import { FirebirdPlanejamentosAtividadesTalhoesSafrasMapper } from '../mappers/firebird-planejamentos-atividades-talhoes-safras.mapper';
import { PlanejamentoAtividadeTalhaoSafra } from 'src/modules/planejamentos-atividades-talhoes-safras/entities/planejamento-atividade-talhao-safra.entity';

@Injectable()
export class FirebirdPlanejamentosAtividadesTalhoesSafrasRepository
  implements PlanejamentosAtividadesTalhoesSafrasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<PlanejamentoAtividadeTalhaoSafra>(
      host,
      code,
      'SELECT * FROM plan_atv_talhao_safra',
      FirebirdPlanejamentosAtividadesTalhoesSafrasMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { PlanejamentosAtividadesRepository } from 'src/modules/planejamentos-atividades/planejamentos-atividades.repository';
import { FirebirdService } from '../firebird.service';
import { PlanejamentoAtividade } from 'src/modules/planejamentos-atividades/entities/planejamento-atividade.entity';
import { FirebirdPlanejamentosAtividadesMapper } from '../mappers/firebird-planejamentos-atividades.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdPlanejamentosAtividadesRepository
  implements PlanejamentosAtividadesRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<PlanejamentoAtividade>(
      host,
      code,
      `SELECT * FROM PLAN_ATV ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdPlanejamentosAtividadesMapper.toDomain,
    );
  }
}

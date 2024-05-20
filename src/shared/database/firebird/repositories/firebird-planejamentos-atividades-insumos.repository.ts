import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { PlanejamentosAtividadesInsumosRepository } from 'src/modules/planejamentos-atividades-insumos/planejamentos-atividades-insumos.repository';
import { PlanejamentoAtividadeInsumo } from 'src/modules/planejamentos-atividades-insumos/entities/planejamento-atividade-insumo.entity';
import { FirebirdPlanejamentosAtividadesInsumosMapper } from '../mappers/firebird-planejamentos-atividades-insumos.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdPlanejamentosAtividadesInsumosRepository
  implements PlanejamentosAtividadesInsumosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<PlanejamentoAtividadeInsumo>(
      host,
      code,
      `SELECT * FROM PLAN_ATV_INSUMO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdPlanejamentosAtividadesInsumosMapper.toDomain,
    );
  }
}

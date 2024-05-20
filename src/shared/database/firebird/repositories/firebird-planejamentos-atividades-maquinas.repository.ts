import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { PlanejamentosAtividadesMaquinasRepository } from 'src/modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.repository';
import { PlanejamentoAtividadeMaquina } from 'src/modules/planejamentos-atividades-maquinas/entities/planejamento-atividade-maquina.entity';
import { FirebirdPlanejamentosAtividadesMaquinasMapper } from '../mappers/firebird-planejamentos-atividades-maquinas.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdPlanejamentosAtividadesMaquinasRepository
  implements PlanejamentosAtividadesMaquinasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<PlanejamentoAtividadeMaquina>(
      host,
      code,
      `SELECT * FROM PLAN_ATV_MAQUINA ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdPlanejamentosAtividadesMaquinasMapper.toDomain,
    );
  }
}

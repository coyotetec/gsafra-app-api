import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { PlanejamentosAtividadesMaquinasRepository } from 'src/modules/planejamentos-atividades-maquinas/planejamentos-atividades-maquinas.repository';
import { PlanejamentoAtividadeMaquina } from 'src/modules/planejamentos-atividades-maquinas/entities/planejamento-atividade-maquina.entity';
import { FirebirdPlanejamentosAtividadesMaquinasMapper } from '../mappers/firebird-planejamentos-atividades-maquinas.mapper';

@Injectable()
export class FirebirdPlanejamentosAtividadesMaquinasRepository
  implements PlanejamentosAtividadesMaquinasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<PlanejamentoAtividadeMaquina>(
      host,
      code,
      'SELECT * FROM plan_atv_maquina',
      FirebirdPlanejamentosAtividadesMaquinasMapper.toDomain,
    );
  }
}

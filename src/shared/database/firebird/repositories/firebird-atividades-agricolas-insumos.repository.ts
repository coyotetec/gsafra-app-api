import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { AtividadesAgricolasInsumosRepository } from 'src/modules/atividades-agricolas-insumos/atividades-agricolas-insumos.repository';
import { AtividadeAgricolaInsumo } from 'src/modules/atividades-agricolas-insumos/entities/atividade-agricola-insumo.entity';
import { FirebirdAtividadesAgricolasInsumosMapper } from '../mappers/firebird-atividades-agricolas-insumos.mapper';

@Injectable()
export class FirebirdAtividadesAgricolasInsumosRepository
  implements AtividadesAgricolasInsumosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AtividadeAgricolaInsumo>(
      host,
      code,
      'SELECT * FROM agri_atv_insumo',
      FirebirdAtividadesAgricolasInsumosMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasRepository } from 'src/modules/atividades-agricolas/atividades-agricolas.repository';
import { FirebirdService } from '../firebird.service';
import { AtividadeAgricola } from 'src/modules/atividades-agricolas/entities/atividade-agricola.entity';
import { FirebirdAtividadesAgricolasMapper } from '../mappers/firebird-atividades-agricolas.mapper';

@Injectable()
export class FirebirdAtividadesAgricolasRepository
  implements AtividadesAgricolasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AtividadeAgricola>(
      host,
      code,
      'SELECT * FROM agri_atv',
      FirebirdAtividadesAgricolasMapper.toDomain,
    );
  }
}

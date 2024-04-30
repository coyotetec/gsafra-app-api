import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { AtividadesAgricolasTalhoesSafrasRepository } from 'src/modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.repository';
import { FirebirdAtividadesAgricolasTalhoesSafrasMapper } from '../mappers/firebird-atividades-agricolas-talhoes-safras.mapper';
import { AtividadeAgricolaTalhaoSafra } from 'src/modules/atividades-agricolas-talhoes-safras/entities/atividade-agricola-talhao-safra.entity';

@Injectable()
export class FirebirdAtividadesAgricolasTalhoesSafrasRepository
  implements AtividadesAgricolasTalhoesSafrasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AtividadeAgricolaTalhaoSafra>(
      host,
      code,
      'SELECT * FROM agri_atv_talhao_safra',
      FirebirdAtividadesAgricolasTalhoesSafrasMapper.toDomain,
    );
  }
}

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

  async create(
    host: string,
    code: string,
    atividadeAgricolaTalhaoSafra: AtividadeAgricolaTalhaoSafra,
  ) {
    const {
      idAgriAtv,
      idTalhaoSafra,
      hectares,
      proporcao,
      hectaresPlanejamento,
      proporcaoPlanejamento,
    } = atividadeAgricolaTalhaoSafra;

    await this.firebird.query(
      host,
      code,
      `INSERT INTO AGRI_ATV_TALHAO_SAFRA (ID, ID_AGRI_ATV, ID_TALHAO_SAFRA, HECTARES, PROPORCAO, HECTARES_PLANEJAMENTO, PROPORCAO_PLANEJAMENTO) VALUES (GEN_ID(ID_AGRI_ATV_TALHAO_SAFRA ,1), ${idAgriAtv}, ${idTalhaoSafra}, ${hectares}, ${proporcao}, ${hectaresPlanejamento}, ${proporcaoPlanejamento})`,
    );
  }
}

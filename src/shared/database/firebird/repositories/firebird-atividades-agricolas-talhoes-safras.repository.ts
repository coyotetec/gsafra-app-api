import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { AtividadesAgricolasTalhoesSafrasRepository } from 'src/modules/atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.repository';
import { FirebirdAtividadesAgricolasTalhoesSafrasMapper } from '../mappers/firebird-atividades-agricolas-talhoes-safras.mapper';
import { AtividadeAgricolaTalhaoSafra } from 'src/modules/atividades-agricolas-talhoes-safras/entities/atividade-agricola-talhao-safra.entity';
import { format } from 'date-fns';

@Injectable()
export class FirebirdAtividadesAgricolasTalhoesSafrasRepository
  implements AtividadesAgricolasTalhoesSafrasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<AtividadeAgricolaTalhaoSafra>(
      host,
      code,
      `SELECT * FROM AGRI_ATV_TALHAO_SAFRA ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
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

    return (
      await this.firebird.query(
        host,
        code,
        `INSERT INTO AGRI_ATV_TALHAO_SAFRA (ID, ID_AGRI_ATV, ID_TALHAO_SAFRA, HECTARES, PROPORCAO, HECTARES_PLANEJAMENTO, PROPORCAO_PLANEJAMENTO) VALUES (GEN_ID(ID_AGRI_ATV_TALHAO_SAFRA ,1), ${idAgriAtv}, ${idTalhaoSafra}, ${hectares}, ${proporcao}, ${hectaresPlanejamento}, ${proporcaoPlanejamento}) RETURNING ID`,
        FirebirdAtividadesAgricolasTalhoesSafrasMapper.toCreateDomain,
      )
    )[0];
  }
}

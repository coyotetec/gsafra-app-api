import { AtividadeAgricolaTalhaoSafra } from 'src/modules/atividades-agricolas-talhoes-safras/entities/atividade-agricola-talhao-safra.entity';

interface FirebirdAtividadeAgricolaTalhaoSafra {
  ID: number;
  ID_AGRI_ATV: number;
  ID_TALHAO_SAFRA: number;
  HECTARES: number;
  PROPORCAO: number;
  HECTARES_PLANEJAMENTO: number;
  PROPORCAO_PLANEJAMENTO: number;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdAtividadesAgricolasTalhoesSafrasMapper {
  static toDomain(
    raw: FirebirdAtividadeAgricolaTalhaoSafra,
  ): AtividadeAgricolaTalhaoSafra {
    return new AtividadeAgricolaTalhaoSafra({
      id: raw.ID,
      idAgriAtv: raw.ID_AGRI_ATV,
      idTalhaoSafra: raw.ID_TALHAO_SAFRA,
      hectares: raw.HECTARES,
      proporcao: raw.PROPORCAO,
      hectaresPlanejamento: raw.HECTARES_PLANEJAMENTO,
      proporcaoPlanejamento: raw.PROPORCAO_PLANEJAMENTO,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

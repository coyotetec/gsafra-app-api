import { AtividadeAgricolaMaquina } from 'src/modules/atividades-agricolas-maquinas/entities/atividade-agricola-maquina.entity';
import { CreatedAtividadeAgricolaMaquina } from 'src/modules/atividades-agricolas-maquinas/entities/created-atividade-agricola-maquina.entity';

interface FirebirdAtividadeAgricolaMaquina {
  ID: number;
  ID_AGRI_ATV: number;
  ID_PATRIMONIO: number;
  HR_INICIAL: number;
  HR_FINAL: number;
  HORAS: number;
  DATA_ATUALIZACAO?: Date;
}

interface FirebirdCreatedAtividadeAgricolaMaquina {
  ID: number;
}

export class FirebirdAtividadesAgricolasMaquinasMapper {
  static toDomain(
    raw: FirebirdAtividadeAgricolaMaquina,
  ): AtividadeAgricolaMaquina {
    return new AtividadeAgricolaMaquina({
      id: raw.ID,
      idAgriAtv: raw.ID_AGRI_ATV,
      idPatrimonio: raw.ID_PATRIMONIO,
      hrInicial: raw.HR_INICIAL,
      hrFinal: raw.HR_FINAL,
      horas: raw.HORAS,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }

  static toCreateDomain(
    raw: FirebirdCreatedAtividadeAgricolaMaquina,
  ): CreatedAtividadeAgricolaMaquina {
    return new CreatedAtividadeAgricolaMaquina({
      id: raw.ID,
    });
  }
}

import { TalhaoSafraArea } from 'src/modules/talhoes-safras/entities/talhao-safra-area.entity';
import { TalhaoSafra } from 'src/modules/talhoes-safras/entities/talhao-safra.entity';

interface FirebirdTalhaoSafra {
  ID: number;
  ID_TALHAO: number;
  ID_CICLO_PRODUCAO: number;
  HECTARES: number;
  DATA_INICIO: Date;
  DATA_FIM: Date;
  STATUS: number;
  ID_VARIEDADE: number;
  ID_ESTOQUE_AGRI_LOCAL: number;
  DATA_ATUALIZACAO?: Date;
}

interface FirebirdTalhaoSafraArea {
  AREA: number;
}

export class FirebirdTalhoesSafraMapper {
  static toDomain(raw: FirebirdTalhaoSafra): TalhaoSafra {
    return {
      id: raw.ID,
      idTalhao: raw.ID_TALHAO,
      idCicloProducao: raw.ID_CICLO_PRODUCAO,
      hectares: raw.HECTARES,
      dataInicio: raw.DATA_INICIO,
      dataFim: raw.DATA_FIM,
      status: raw.STATUS,
      idVariedade: raw.ID_VARIEDADE,
      idEstoqueAgriLocal: raw.ID_ESTOQUE_AGRI_LOCAL,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    };
  }

  static toAreaDomain(raw: FirebirdTalhaoSafraArea): TalhaoSafraArea {
    return new TalhaoSafraArea({
      area: raw.AREA,
    });
  }
}

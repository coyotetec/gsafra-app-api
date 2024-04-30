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
}

export class FirebirdTalhoesSafraMapper {
  static toDomain(talhaoSafra: FirebirdTalhaoSafra): TalhaoSafra {
    return {
      id: talhaoSafra.ID,
      idTalhao: talhaoSafra.ID_TALHAO,
      idCicloProducao: talhaoSafra.ID_CICLO_PRODUCAO,
      hectares: talhaoSafra.HECTARES,
      dataInicio: talhaoSafra.DATA_INICIO,
      dataFim: talhaoSafra.DATA_FIM,
      status: talhaoSafra.STATUS,
      idVariedade: talhaoSafra.ID_VARIEDADE,
      idEstoqueAgriLocal: talhaoSafra.ID_ESTOQUE_AGRI_LOCAL,
    };
  }
}

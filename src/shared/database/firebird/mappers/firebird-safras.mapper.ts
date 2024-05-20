import { Safra } from 'src/modules/safras/entities/safra.entity';

interface FirebirdSafra {
  ID: number;
  NOME: string;
  ID_CULTURA: number;
  DATA_INICIO: Date;
  DATA_FINAL: Date;
  STATUS: number;
  PRODUCAO_ESTIMADA: number;
  PRODUCAO_MINIMA: number;
  VALOR_MEDIO_VENDA: number;
  DATA_ATUALIZACAO?: Date;
}

export class FireBirdSafrasMapper {
  static toDomain(raw: FirebirdSafra): Safra {
    return new Safra({
      id: raw.ID,
      nome: raw.NOME,
      idCultura: raw.ID_CULTURA,
      dataInicio: raw.DATA_INICIO,
      dataFinal: raw.DATA_FINAL,
      status: raw.STATUS,
      producaoEstimada: raw.PRODUCAO_ESTIMADA,
      producaoMinima: raw.PRODUCAO_MINIMA,
      valorMedioVenda: raw.VALOR_MEDIO_VENDA,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

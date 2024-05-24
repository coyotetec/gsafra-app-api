import { Variedade } from 'src/modules/variedades/entities/variedade.entity';

interface FirebirdVariedade {
  ID: number;
  NOME: string;
  ID_CULTURA: number;
  CICLO: number;
  STATUS: number;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdVariedadesMapper {
  static toDomain(raw: FirebirdVariedade): Variedade {
    return new Variedade({
      id: raw.ID,
      nome: raw.NOME,
      idCultura: raw.ID_CULTURA,
      ciclo: raw.CICLO,
      status: raw.STATUS,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

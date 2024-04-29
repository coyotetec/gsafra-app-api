import { Cultura } from 'src/modules/culturas/entities/cultura.entity';

interface FirebirdCultura {
  ID: number;
  NOME: string;
  PESO_SACA: number;
  ID_UNIDADE: number;
  NCM: string;
  CULTURA: number;
}

export class FirebirdCulturasMapper {
  static toDomain(raw: FirebirdCultura): Cultura {
    return new Cultura({
      id: raw.ID,
      nome: raw.NOME,
      pesoSaca: raw.PESO_SACA,
      idUnidade: raw.ID_UNIDADE,
      ncm: raw.NCM,
      cultura: raw.CULTURA,
    });
  }
}

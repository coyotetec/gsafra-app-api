import { Unidade } from 'src/modules/unidades/entities/unidade.entity';

interface FirebirdUnidade {
  ID: number;
  NOME: string;
  SIGLA: string;
  PERMITIR_FRACIONAR: number;
}

export class FirebirdUnidadesMapper {
  static toDomain(raw: FirebirdUnidade): Unidade {
    return new Unidade({
      id: raw.ID,
      nome: raw.NOME,
      sigla: raw.SIGLA,
      permitirFracionar: raw.PERMITIR_FRACIONAR,
    });
  }
}

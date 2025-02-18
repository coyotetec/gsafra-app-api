import { TipoManutencao } from 'src/modules/tipos-manutencao/entities/tipos-manutencao.entity';

interface FirebirdTipoManutencao {
  ID: number;
  NOME: string;
}

export class FirebirdTiposManutencaoMapper {
  static toDomain(raw: FirebirdTipoManutencao): TipoManutencao {
    return {
      id: raw.ID,
      nome: raw.NOME,
    };
  }
}

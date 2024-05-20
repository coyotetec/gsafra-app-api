import { EstadioFenologico } from 'src/modules/estadios-fenologicos/entities/estadios-fenologico.entity';

interface FirebirdEstadioFenologico {
  ID: number;
  ID_CULTURA: number;
  NOME: string;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdEstadiosFenologicosMapper {
  static toDomain(raw: FirebirdEstadioFenologico): EstadioFenologico {
    return new EstadioFenologico({
      id: raw.ID,
      idCultura: raw.ID_CULTURA,
      nome: raw.NOME,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

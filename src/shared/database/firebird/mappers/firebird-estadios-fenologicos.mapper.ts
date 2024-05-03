import { EstadioFenologico } from 'src/modules/estadios-fenologicos/entities/estadios-fenologico.entity';

interface FirebirdEstadioFenologico {
  ID: number;
  ID_CULTURA: number;
  NOME: string;
}

export class FirebirdEstadiosFenologicosMapper {
  static toDomain(data: FirebirdEstadioFenologico): EstadioFenologico {
    return new EstadioFenologico({
      id: data.ID,
      idCultura: data.ID_CULTURA,
      nome: data.NOME,
    });
  }
}

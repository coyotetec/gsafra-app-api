import { Dispositivo } from 'src/modules/dispositivos/entities/dispositivo.entity';

interface FirebirdDispositivo {
  ID: number;
  NOME: string;
  INFORMACOES: string;
  STATUS: number;
}

export class FirebirdDispositivosMapper {
  static toDomain(raw: FirebirdDispositivo): Dispositivo {
    return new Dispositivo({
      id: raw.ID,
      nome: raw.NOME,
      informacoes: raw.INFORMACOES,
      status: raw.STATUS,
    });
  }
}

import { Almoxarifado } from 'src/modules/almoxarifados/entities/almoxarifado.entity';

interface FirebirdAlmoxarifado {
  ID: number;
  NOME: string;
  ID_FAZENDA: number;
  STATUS: number;
}

export class FirebirdAlmoxarifadosMapper {
  static toDomain(raw: FirebirdAlmoxarifado): Almoxarifado {
    return new Almoxarifado({
      id: raw.ID,
      nome: raw.NOME,
      idFazenda: raw.ID_FAZENDA,
      status: raw.STATUS,
    });
  }
}

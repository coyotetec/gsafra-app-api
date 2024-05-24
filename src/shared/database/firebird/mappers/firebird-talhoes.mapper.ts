import { Talhao } from 'src/modules/talhoes/entities/talhao.entity';

interface FireBirdTalhao {
  ID: number;
  DESCRICAO: string;
  DATA_CADASTRO: Date;
  DATA_DESATIVADO: Date;
  HECTARES: number;
  STATUS: number;
  ID_FAZENDA: number;
  COORDENADAS: string;
  DATA_ATUALIZACAO?: Date;
}

export class FireBirdTalhoesMapper {
  static toDomain(raw: FireBirdTalhao): Talhao {
    return new Talhao({
      id: raw.ID,
      descricao: raw.DESCRICAO,
      dataCadastro: raw.DATA_CADASTRO,
      dataDesativado: raw.DATA_DESATIVADO,
      hectares: raw.HECTARES,
      status: raw.STATUS,
      idFazenda: raw.ID_FAZENDA,
      coordenadas: raw.COORDENADAS,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

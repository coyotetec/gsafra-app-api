import { TipoAtividade } from 'src/modules/tipos-atividades/entities/tipos-atividade.entity';

interface FirebirdTipoAtividade {
  ID: number;
  NOME: string;
  PREPARO_SOLO: number;
  TRATAMENTO_SEMENTE: number;
  PLANTIO: number;
  FERTILIZACAO: number;
  APLICACAO: number;
  COLHEITA: number;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdTiposAtividadesMapper {
  static toDomain(raw: FirebirdTipoAtividade): TipoAtividade {
    return {
      id: raw.ID,
      nome: raw.NOME,
      preparoSolo: raw.PREPARO_SOLO,
      tratamentoSemente: raw.TRATAMENTO_SEMENTE,
      plantio: raw.PLANTIO,
      fertilizacao: raw.FERTILIZACAO,
      aplicacao: raw.APLICACAO,
      colheita: raw.COLHEITA,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    };
  }
}

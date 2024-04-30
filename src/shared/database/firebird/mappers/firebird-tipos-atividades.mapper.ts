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
}

export class FirebirdTiposAtividadesMapper {
  static toDomain(tipoAtividade: FirebirdTipoAtividade): TipoAtividade {
    return {
      id: tipoAtividade.ID,
      nome: tipoAtividade.NOME,
      preparoSolo: tipoAtividade.PREPARO_SOLO,
      tratamentoSemente: tipoAtividade.TRATAMENTO_SEMENTE,
      plantio: tipoAtividade.PLANTIO,
      fertilizacao: tipoAtividade.FERTILIZACAO,
      aplicacao: tipoAtividade.APLICACAO,
      colheita: tipoAtividade.COLHEITA,
    };
  }
}

import { TipoAplicacao } from 'src/modules/tipos-aplicacao/entities/tipo-aplicacao.entity';

interface FirebirdTipoAplicacao {
  ID: number;
  NOME: string;
  DATA_ATUALIZACAO?: Date;
}

export class FirebirdTiposAplicacaoMapper {
  static toDomain(raw: FirebirdTipoAplicacao): TipoAplicacao {
    return new TipoAplicacao({
      id: raw.ID,
      nome: raw.NOME,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }
}

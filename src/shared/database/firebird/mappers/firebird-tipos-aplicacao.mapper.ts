import { TipoAplicacao } from 'src/modules/tipos-aplicacao/entities/tipo-aplicacao.entity';

interface FirebirdTipoAplicacao {
  ID: number;
  NOME: string;
}

export class FirebirdTiposAplicacaoMapper {
  static toDomain(data: FirebirdTipoAplicacao): TipoAplicacao {
    return new TipoAplicacao({
      id: data.ID,
      nome: data.NOME,
    });
  }
}

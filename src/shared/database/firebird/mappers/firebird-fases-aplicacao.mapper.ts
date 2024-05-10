import { FaseAplicacao } from 'src/modules/fases-aplicacao/entities/fase-aplicacao.entity';

interface FirebirdFaseAplicacao {
  ID: number;
  NOME: string;
}

export class FirebirdFasesAplicacaoMapper {
  static toDomain(raw: FirebirdFaseAplicacao): FaseAplicacao {
    return new FaseAplicacao({
      id: raw.ID,
      nome: raw.NOME,
    });
  }
}

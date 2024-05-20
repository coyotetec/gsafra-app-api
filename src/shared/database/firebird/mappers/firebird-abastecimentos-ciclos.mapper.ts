import { AbastecimentoCiclo } from 'src/modules/abastecimentos-ciclos/entities/abastecimento-ciclo.entity';
import { CreatedAbastecimentoCiclo } from 'src/modules/abastecimentos-ciclos/entities/created-abasteciment-ciclo.entity';

interface FirebirdAbastecimentoCiclo {
  ID: number;
  ID_ABASTECIMENTO: number;
  ID_CICLO_PRODUCAO: number;
  PROPORCAO: number;
  QTDE_TALHOES: number;
  TODOS_TALHOES: number;
  TOTAL_HECTARES: number;
  VALOR: number;
  VALOR_CUSTO_ATUAL: number;
  DATA_ATUALIZACAO?: Date;
}

interface FirebirdCreatedAbastecimentoCiclo {
  ID: number;
}

export class FirebirdAbastecimentosCiclosMapper {
  static toDomain(raw: FirebirdAbastecimentoCiclo): AbastecimentoCiclo {
    return new AbastecimentoCiclo({
      id: raw.ID,
      idAbastecimento: raw.ID_ABASTECIMENTO,
      idCicloProducao: raw.ID_CICLO_PRODUCAO,
      proporcao: raw.PROPORCAO,
      qtdeTalhoes: raw.QTDE_TALHOES,
      todosTalhoes: raw.TODOS_TALHOES,
      totalHectares: raw.TOTAL_HECTARES,
      valor: raw.VALOR,
      valorCustoAtual: raw.VALOR_CUSTO_ATUAL,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
    });
  }

  static toCreatedDomain(
    raw: FirebirdCreatedAbastecimentoCiclo,
  ): CreatedAbastecimentoCiclo {
    return new CreatedAbastecimentoCiclo({
      id: raw.ID,
    });
  }
}

import { AbastecimentoCiclo } from 'src/modules/abastecimentos-ciclos/entities/abastecimento-ciclo.entity';

interface FirebirdAbastecimentoCiclo {
  ID: number;
  ID_ABASTECIMENTO: number;
  ID_CICLO_PRODUCAO: number;
  PROPORCAO: number;
  QTDE_TALHOES: number;
  TODOS_TALHOES: number;
  VALOR: number;
  VALOR_CUSTO_ATUAL: number;
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
      valor: raw.VALOR,
      valorCustoAtual: raw.VALOR_CUSTO_ATUAL,
    });
  }
}

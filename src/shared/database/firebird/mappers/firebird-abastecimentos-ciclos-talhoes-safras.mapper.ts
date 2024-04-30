import { AbastecimentoCicloTalhaoSafra } from 'src/modules/abastecimentos-ciclos-talhoes-safras/entities/abastecimento-ciclo-talhao-safra.entity';

interface FirebirdAbastecimentoCicloTalhaoSafra {
  ID: number;
  ID_ABASTECIMENTO_CICLO: number;
  ID_TALHAO_SAFRA: number;
  PROPORCAO: number;
  TOTAL_HECTARES: number;
  VALOR: number;
  VALOR_CUSTO_ATUAL: number;
}

export class FirebirdAbastecimentosCiclosTalhoesSafrasMapper {
  static toDomain(
    raw: FirebirdAbastecimentoCicloTalhaoSafra,
  ): AbastecimentoCicloTalhaoSafra {
    return new AbastecimentoCicloTalhaoSafra({
      id: raw.ID,
      idAbastecimentoCiclo: raw.ID_ABASTECIMENTO_CICLO,
      idTalhaoSafra: raw.ID_TALHAO_SAFRA,
      proporcao: raw.PROPORCAO,
      totalHectares: raw.TOTAL_HECTARES,
      valor: raw.VALOR,
      valorCustoAtual: raw.VALOR_CUSTO_ATUAL,
    });
  }
}

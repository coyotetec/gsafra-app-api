import { Manutencao } from 'src/modules/manutencao/entities/manutencao.entity';

interface FirebirdManutencao {
  ID: number;
  ID_PATRIMONIO: number;
  TIPO_MANUTENCAO: number;
  DATA: string;
  HORIMETRO: number;
  DESCRICAO: string;
  SITUACAO: number;
  TOTAL_SERVICO?: number;
  TOTAL_GERAL?: number;
  TOTAL_PECAS?: number;
}

interface FirebirdCreatedAbastecimentoCicloTalhaoSafra {
  ID: number;
}

export class FirebirdManutencaoMapper {
  static toDomain(
    raw: FirebirdManutencao,
  ): Manutencao {
    return new Manutencao({
      id: raw.ID,
      idPatrimonio: raw.ID_PATRIMONIO,
      tipoManutencao: raw.TIPO_MANUTENCAO,
      horimetro: raw.HORIMETRO,
      totalServico: raw.TOTAL_SERVICO,
      totalPecas: raw.TOTAL_PECAS,
      totalGeral: raw.TOTAL_GERAL,
      data: raw.DATA,
      descricao: raw.DESCRICAO,
    });
  }

  // static toCreatedDomain(
  //   raw: FirebirdCreatedAbastecimentoCicloTalhaoSafra,
  // ): CreatedAbastecimentoCicloTalhaoSafra {
  //   return new CreatedAbastecimentoCicloTalhaoSafra({
  //     id: raw.ID,
  //   });
  // }
}

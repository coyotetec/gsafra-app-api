import { ManutencaoServico } from "src/modules/manutencao-servico/entities/manutencao-servico.entity";

interface FirebirdManutencaoServico {
  ID: number;
  ID_MANUTENCAO_M: number;
  ID_TIPO_MANUTENCAO: number;
  VALOR: number;
  TOTAL_PECAS: number;
  TOTAL: number;
}
export class FirebirdManutencaoMapperServico {
  static toDomain(
    raw: FirebirdManutencaoServico,
  ): ManutencaoServico {
    return new ManutencaoServico({
      id: raw.ID,
      idManutencaoM: raw.ID_MANUTENCAO_M,
      idTipoManutencao: raw.ID_TIPO_MANUTENCAO,
      valor: raw.VALOR,
      totalPecas: raw.TOTAL_PECAS,
      total: raw.TOTAL
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

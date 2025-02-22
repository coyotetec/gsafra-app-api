import { ManutencaoCiclo } from 'src/modules/manutencao-ciclo/entities/manutencao.entity';
interface FirebirdManutencaoCiclo {
  ID: number;
  ID_MANUTENCAO_M: number;
  ID_CICLO_PRODUCAO: number;
  VALOR: number;
  PROPORCAO: number
  QTDE_TALHOES: number
  TOTAL_HECTARES: number
}
export class FirebirdManutencaoCicloMapper {
  static toDomain(
    raw: FirebirdManutencaoCiclo,
  ): ManutencaoCiclo {
    return new ManutencaoCiclo({
      id: raw.ID,
      idManutencao: raw.ID_MANUTENCAO_M,
      idCicloProducao: raw.ID_CICLO_PRODUCAO,
      totalHectares: raw.TOTAL_HECTARES,
      valor: raw.VALOR,
      proporcao: raw.PROPORCAO,
      qtdeTalhoes: raw.QTDE_TALHOES
    });
  }
}

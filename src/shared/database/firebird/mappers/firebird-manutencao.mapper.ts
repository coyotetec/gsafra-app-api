import { ManutencaoCicloEntity } from 'src/modules/manutencao/entities/manutencao-ciclo.entity';
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
interface ManutencaoCiclo {
  ID: number;
  ID_MANUTENCAO_M: number;
  ID_CICLO_PRODUCAO: number;
  TOTAL_HECTARES: number;
  VALOR: number;
  PROPORCAO: number;
  QTDE_TALHOES: number;
  ID_PATRIMONIO: number;
  ID_FORNECEDOR: number;
  TIPO_MANUTENCAO: number;
  DATA: string; // Ou Date se você for trabalhar com objetos Date
  HORIMETRO: number;
  DESCRICAO: string | null;
  SITUACAO: number;
  TOTAL_SERVICO: number;
  TOTAL_PECAS: number;
  TOTAL_GERAL: number;
  ID_PESSOA: number;
  OBS: string;
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
  static toDomainFrontend(
    raw: ManutencaoCiclo,
  ): ManutencaoCicloEntity {
    return new ManutencaoCicloEntity({
      id: raw.ID,
      idManutencaoM: raw.ID_MANUTENCAO_M,
      idCicloProducao: raw.ID_CICLO_PRODUCAO,
      totalHectares: raw.TOTAL_HECTARES,
      valor: raw.VALOR,
      proporcao: raw.PROPORCAO,
      qtdeTalhoes: raw.QTDE_TALHOES,
      idPatrimonio: raw.ID_PATRIMONIO,
      idFornecedor: raw.ID_FORNECEDOR,
      tipoManutencao: raw.TIPO_MANUTENCAO,
      data: raw.DATA,
      horimetro: raw.HORIMETRO,
      descricao: raw.DESCRICAO,
      situacao: raw.SITUACAO,
      totalServico: raw.TOTAL_SERVICO,
      totalPecas: raw.TOTAL_PECAS,
      totalGeral: raw.TOTAL_GERAL,
      idPessoa: raw.ID_PESSOA,
      obs: raw.OBS,
    });
  }

  static toCreatedDomain(
    raw: FirebirdManutencao,
  ): { id: string } {
    return { id: raw.ID.toString() };
  }
}

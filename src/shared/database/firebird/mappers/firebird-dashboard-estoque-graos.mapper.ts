import { DashboardEstoqueGraosEntries } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-entries.entity';
import { DashboardEstoqueGraosOutflow } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-outflow.entity';

interface FirebirdDashboardEstoqueGraosEntry {
  ID_PRODUTOR: number;
  PRODUTOR: string;
  PESO: number;
  DESCONTO_CLASSIFICACAO: number;
  TAXA_RECEPCAO: number;
  COTA_CAPITAL: number;
  TAXA_ARMAZENAMENTO: number;
  QUEBRA_TECNICA: number;
}

interface FirebirdEstoqueGraosOutflow {
  ID_PRODUTOR: number;
  PRODUTOR: string;
  PESO: number;
  DESCONTO_CLASSIFICACAO: number;
}

export class FirebirdDashboardEstoqueGraosMapper {
  static toEntriesDomain(raw: FirebirdDashboardEstoqueGraosEntry) {
    return new DashboardEstoqueGraosEntries({
      idProdutor: raw.ID_PRODUTOR,
      produtor: raw.PRODUTOR,
      peso: raw.PESO,
      descontoClassificacao: raw.DESCONTO_CLASSIFICACAO,
      taxaRecepcao: raw.TAXA_RECEPCAO,
      cotaCapital: raw.COTA_CAPITAL,
      taxaArmazenamento: raw.TAXA_ARMAZENAMENTO,
      quebraTecnica: raw.QUEBRA_TECNICA,
      pesoLiquido:
        raw.PESO -
        (raw.DESCONTO_CLASSIFICACAO +
          raw.TAXA_RECEPCAO +
          raw.COTA_CAPITAL +
          raw.TAXA_ARMAZENAMENTO +
          raw.QUEBRA_TECNICA),
    });
  }

  static toOutflowDomain(raw: FirebirdEstoqueGraosOutflow) {
    return new DashboardEstoqueGraosOutflow({
      idProdutor: raw.ID_PRODUTOR,
      produtor: raw.PRODUTOR,
      peso: raw.PESO,
      descontoClassificacao: raw.DESCONTO_CLASSIFICACAO,
      pesoLiquido: raw.PESO - raw.DESCONTO_CLASSIFICACAO,
    });
  }
}

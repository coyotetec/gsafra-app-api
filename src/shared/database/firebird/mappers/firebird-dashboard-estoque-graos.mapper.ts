import { DashboardEstoqueGraosEntries } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-entries.entity';
import { DashboardEstoqueGraosOutflow } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-outflow.entity';
import { DashboardEstoqueGraosProdutorEntries } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-produtor-entries.entity';
import { DashboardEstoqueGraosProdutorOutflow } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-produtor-outflow.entity';
import { DashboardEstoqueGraoProdutorPreviousBalance } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-produtor-previous-balance.entity';
import { DashboardEstoqueGraosPreviousBalance } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-graos-previous-balance.entity';

interface FirebirdDashboardEstoqueGraosEntry {
  PESO: number;
  DESCONTO_CLASSIFICACAO: number;
  TAXA_RECEPCAO: number;
  COTA_CAPITAL: number;
  TAXA_ARMAZENAMENTO: number;
  QUEBRA_TECNICA: number;
}

interface FirebirdDashboardEstoqueGraosProdutorEntry {
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
  PESO: number;
  DESCONTO_CLASSIFICACAO: number;
}

interface FirebirdEstoqueGraosProdutorOutflow {
  ID_PRODUTOR: number;
  PRODUTOR: string;
  PESO: number;
  DESCONTO_CLASSIFICACAO: number;
}

interface FirebirdEstoqueGraosPreviousBalance {
  SALDO: number;
}

interface FirebirdEstoqueGraosProdutorPreviousBalance {
  ID_PRODUTOR: number;
  PRODUTOR: string;
  SALDO: number;
}

export class FirebirdDashboardEstoqueGraosMapper {
  static toPreviousBalanceDomain(raw: FirebirdEstoqueGraosPreviousBalance) {
    return new DashboardEstoqueGraosPreviousBalance({
      balance: raw.SALDO,
    });
  }

  static toEntriesDomain(raw: FirebirdDashboardEstoqueGraosEntry) {
    return new DashboardEstoqueGraosEntries({
      weight: raw.PESO,
      ratingDiscount: raw.DESCONTO_CLASSIFICACAO,
      receivingFee: raw.TAXA_RECEPCAO,
      capitalQuota: raw.COTA_CAPITAL,
      storageFee: raw.TAXA_ARMAZENAMENTO,
      technicalBreaks: raw.QUEBRA_TECNICA,
      netWeight:
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
      weight: raw.PESO,
      ratingDiscount: raw.DESCONTO_CLASSIFICACAO,
      netWeight: raw.PESO - raw.DESCONTO_CLASSIFICACAO,
    });
  }

  static toProdutorEntryDomain(
    raw: FirebirdDashboardEstoqueGraosProdutorEntry,
  ) {
    return new DashboardEstoqueGraosProdutorEntries({
      producerId: raw.ID_PRODUTOR,
      producer: raw.PRODUTOR,
      weight: raw.PESO,
      ratingDiscount: raw.DESCONTO_CLASSIFICACAO,
      receivingFee: raw.TAXA_RECEPCAO,
      capitalQuota: raw.COTA_CAPITAL,
      storageFee: raw.TAXA_ARMAZENAMENTO,
      technicalBreaks: raw.QUEBRA_TECNICA,
      netWeight:
        raw.PESO -
        (raw.DESCONTO_CLASSIFICACAO +
          raw.TAXA_RECEPCAO +
          raw.COTA_CAPITAL +
          raw.TAXA_ARMAZENAMENTO +
          raw.QUEBRA_TECNICA),
    });
  }

  static toProdutorOutflowDomain(raw: FirebirdEstoqueGraosProdutorOutflow) {
    return new DashboardEstoqueGraosProdutorOutflow({
      producerId: raw.ID_PRODUTOR,
      producer: raw.PRODUTOR,
      weight: raw.PESO,
      ratingDiscount: raw.DESCONTO_CLASSIFICACAO,
      netWeight: raw.PESO - raw.DESCONTO_CLASSIFICACAO,
    });
  }

  static toProdutorPreviousBalanceDomain(
    raw: FirebirdEstoqueGraosProdutorPreviousBalance,
  ) {
    return new DashboardEstoqueGraoProdutorPreviousBalance({
      producerId: raw.ID_PRODUTOR,
      producer: raw.PRODUTOR,
      balance: raw.SALDO,
    });
  }
}

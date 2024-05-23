export enum FinancialType {
  RECEBER = 1,
  PAGAR = 2,
}

export class TotallizersFiltersDto {
  type?: FinancialType;
  startDate?: Date;
  endDate?: Date;
  harvestId?: number;
}

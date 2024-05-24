export interface DashboardEstoqueGraosFiltersDto {
  cropId: number;
  startDate?: Date;
  endDate?: Date;
  storageId?: number;
  harvestId?: number;
}

export type FindPreviousBalanceDto = Omit<
  DashboardEstoqueGraosFiltersDto,
  'endDate'
>;

import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';

export interface DashboardEstoqueGraosFiltersDto {
  idCultura: number;
  startDate?: Date;
  endDate?: Date;
  idArmazenamento?: number;
  idSafra?: number;
}

type FindPreviousBalanceType = Omit<DashboardEstoqueGraosFiltersDto, 'endDate'>;

export interface FindPreviousBalanceArgsDto {
  filters: FindPreviousBalanceType;
  dbConnection: DBConnectionDataType;
}

export interface DashboardEstoqueGraosArgsDto {
  filters: DashboardEstoqueGraosFiltersDto;
  dbConnection: DBConnectionDataType;
}

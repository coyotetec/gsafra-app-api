import {
  DashboardEstoqueGraosArgsDto,
  FindPreviousBalanceArgsDto,
} from './dto/estoque-graos-args.dto';
import { DashboardEstoqueGraosEntries } from './entities/dashboard-estoque-grao-entries.entity';
import { DashboardEstoqueGraosOutflow } from './entities/dashboard-estoque-grao-outflow.entity';

export abstract class DashboardEstoqueGraosRepository {
  abstract findPreviousBalance({
    dbConnection,
    filters,
  }: FindPreviousBalanceArgsDto): Promise<number>;

  abstract findEntries({
    dbConnection,
    filters,
  }: DashboardEstoqueGraosArgsDto): Promise<DashboardEstoqueGraosEntries>;

  abstract findOutflow({
    dbConnection,
    filters,
  }: DashboardEstoqueGraosArgsDto): Promise<DashboardEstoqueGraosOutflow>;
}

import {
  DashboardEstoqueGraosFiltersDto,
  FindPreviousBalanceDto,
} from './dto/estoque-graos-args.dto';
import { DashboardEstoqueGraosEntries } from './entities/dashboard-estoque-grao-entries.entity';
import { DashboardEstoqueGraosOutflow } from './entities/dashboard-estoque-grao-outflow.entity';
import { DashboardEstoqueGraosProdutorEntries } from './entities/dashboard-estoque-grao-produtor-entries.entity';
import { DashboardEstoqueGraosProdutorOutflow } from './entities/dashboard-estoque-grao-produtor-outflow.entity';
import { DashboardEstoqueGraoProdutorPreviousBalance } from './entities/dashboard-estoque-grao-produtor-previous-balance.entity';

export abstract class DashboardEstoqueGraosRepository {
  abstract findPreviousBalance(
    host: string,
    code: string,
    filters: FindPreviousBalanceDto,
  ): Promise<number>;

  abstract findEntries(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ): Promise<DashboardEstoqueGraosEntries>;

  abstract findOutflow(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ): Promise<DashboardEstoqueGraosOutflow>;

  abstract findProdutorPreviousBalance(
    host: string,
    code: string,
    filters: FindPreviousBalanceDto,
  ): Promise<DashboardEstoqueGraoProdutorPreviousBalance[]>;

  abstract findProdutorEntries(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ): Promise<DashboardEstoqueGraosProdutorEntries[]>;

  abstract findProdutorOutflow(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ): Promise<DashboardEstoqueGraosProdutorOutflow[]>;
}

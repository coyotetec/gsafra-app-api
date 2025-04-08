import { Estoque } from './entities/estoque.entity';

export abstract class EstoqueRepository {
  abstract findAll(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<Estoque[]>;
}

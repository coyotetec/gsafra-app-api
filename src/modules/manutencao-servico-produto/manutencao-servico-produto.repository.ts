import { ManutencaoServicoProduto } from './entities/manutencao.entity';

export abstract class ManutencaoServicoProdutoRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<ManutencaoServicoProduto[]>;
}

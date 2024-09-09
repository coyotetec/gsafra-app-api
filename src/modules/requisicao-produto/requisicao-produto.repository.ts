import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { CreatedAbastecimento } from '../abastecimentos/entities/created-abastecimento.entity';
import { RequisicaoProduto } from './entities/requisicao.entity';

export abstract class RequisicaoProdutoRepository {
  abstract findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<RequisicaoProduto[]>;

  abstract create(
    host: string,
    code: string,
    requisicao: RequisicaoProduto,
  ): Promise<CreatedAbastecimento>;
}

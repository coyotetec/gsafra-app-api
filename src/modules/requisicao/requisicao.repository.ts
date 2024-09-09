import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { Requisicao } from './entities/requisicao.entity';
import { CreatedAbastecimento } from '../abastecimentos/entities/created-abastecimento.entity';

export abstract class RequisicaoRepository {
  abstract findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Requisicao[]>;

  abstract create(
    host: string,
    code: string,
    requisicao: Requisicao,
  ): Promise<CreatedAbastecimento>;
}

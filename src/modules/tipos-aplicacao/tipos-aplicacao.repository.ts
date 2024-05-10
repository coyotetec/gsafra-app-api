import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TipoAplicacao } from './entities/tipo-aplicacao.entity';

export abstract class TiposAplicacaoRepository {
  abstract findAll({
    code,
    host,
  }: DBConnectionDataType): Promise<TipoAplicacao[]>;
}

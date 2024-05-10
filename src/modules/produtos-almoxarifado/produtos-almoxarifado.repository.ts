import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { ProdutoAlmoxarifado } from './entities/produto-almoxarifado.entity';

export abstract class ProdutosAlmoxarifadoRepository {
  abstract findMany({
    host,
    code,
  }: DBConnectionDataType): Promise<ProdutoAlmoxarifado[]>;

  abstract findBydId(
    host: string,
    code: string,
    id: number,
  ): Promise<ProdutoAlmoxarifado | undefined>;
}

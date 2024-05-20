import { Injectable } from '@nestjs/common';
import { ProdutoAlmoxarifado } from 'src/modules/produtos-almoxarifado/entities/produto-almoxarifado.entity';
import { ProdutosAlmoxarifadoRepository } from 'src/modules/produtos-almoxarifado/produtos-almoxarifado.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FireBirdProdutosAlmoxarifadoMapper } from '../mappers/firebird-produtos-almoxarifado';
import { format } from 'date-fns';

@Injectable()
export class FirebirdProdutosAlmoxarifadoRepository
  implements ProdutosAlmoxarifadoRepository
{
  constructor(private readonly fireBirdService: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<ProdutoAlmoxarifado[]> {
    return this.fireBirdService.query<ProdutoAlmoxarifado>(
      host,
      code,
      `SELECT * FROM PRODUTO_ALMOXARIFADO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FireBirdProdutosAlmoxarifadoMapper.toDomain,
    );
  }

  async findBydId(host: string, code: string, id: number) {
    return (
      await this.fireBirdService.query<ProdutoAlmoxarifado>(
        host,
        code,
        `SELECT * FROM PRODUTO_ALMOXARIFADO pa WHERE pa.ID = ${id}`,
        FireBirdProdutosAlmoxarifadoMapper.toDomain,
      )
    )[0];
  }
}

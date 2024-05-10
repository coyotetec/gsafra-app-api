import { Injectable } from '@nestjs/common';
import { ProdutoAlmoxarifado } from 'src/modules/produtos-almoxarifado/entities/produto-almoxarifado.entity';
import { ProdutosAlmoxarifadoRepository } from 'src/modules/produtos-almoxarifado/produtos-almoxarifado.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FireBirdProdutosAlmoxarifadoMapper } from '../mappers/firebird-produtos-almoxarifado';

@Injectable()
export class FirebirdProdutosAlmoxarifadoRepository
  implements ProdutosAlmoxarifadoRepository
{
  constructor(private readonly fireBirdService: FirebirdService) {}

  findMany({
    host,
    code,
  }: DBConnectionDataType): Promise<ProdutoAlmoxarifado[]> {
    return this.fireBirdService.query<ProdutoAlmoxarifado>(
      host,
      code,
      'SELECT * FROM PRODUTO_ALMOXARIFADO',
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

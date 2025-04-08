import { Injectable } from '@nestjs/common';
import { ManutencaoServicoProduto } from 'src/modules/manutencao-servico-produto/entities/manutencao.entity';
import { ManutencaoServicoProdutoRepository } from 'src/modules/manutencao-servico-produto/manutencao-servico-produto.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdServiceProdutoMapper } from '../mappers/firebird-manutencao-servico-produto.mapper';

@Injectable()
export class FirebirdManutencaoServicoProdutoRepositoryData
  implements ManutencaoServicoProdutoRepository {
  constructor(private firebird: FirebirdService) { }

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<ManutencaoServicoProduto>(
      host,
      code,
      `SELECT * FROM MANUTENCAO_SERVICO_PRODUTO `,
      FirebirdServiceProdutoMapper.toDomain,
    );
  }
}

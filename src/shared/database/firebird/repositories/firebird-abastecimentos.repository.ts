import { Injectable } from '@nestjs/common';
import { AbastecimentosRepository } from 'src/modules/abastecimentos/abastecimentos.repository';
import { FirebirdService } from '../firebird.service';
import { Abastecimento } from 'src/modules/abastecimentos/entities/abastecimento.entity';
import { FirebirdAbastecimentosMapper } from '../mappers/firebird-abastecimentos.mapper';
import { format } from 'date-fns';
import { CreatedAbastecimento } from 'src/modules/abastecimentos/entities/created-abastecimento.entity';

@Injectable()
export class FirebirdAbastecimentosRepository
  implements AbastecimentosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<Abastecimento>(
      host,
      code,
      'SELECT * FROM abastecimento',
      FirebirdAbastecimentosMapper.toDomain,
    );
  }

  async create(host: string, code: string, abastecimento: Abastecimento) {
    const {
      idAlmoxarifado,
      idPatrimonio,
      idProdutoAlmoxarifado,
      idUsuario,
      custoAtual,
      custoMedio,
      data,
      estoqueMovimentado,
      horimetro,
      numeroRequisicao,
      quantidade,
      statusProcessamento,
      totalAtual,
      totalMedio,
    } = abastecimento;

    return (
      await this.firebird.query<CreatedAbastecimento>(
        host,
        code,
        `INSERT INTO ABASTECIMENTO (ID, ID_ALMOXARIFADO, ID_PATRIMONIO, ID_PRODUTO_ALMOXARIFADO, ID_USUARIO, CUSTO_ATUAL, CUSTO_MEDIO, DATA, ESTOQUE_MOVIMENTADO, HORIMETRO, NUMERO_REQUISICAO, QUANTIDADE, STATUS_PROCESSAMENTO, TOTAL_ATUAL, TOTAL_MEDIO) VALUES (GEN_ID(GEN_ABASTECIMENTO, 1), ${idAlmoxarifado}, ${idPatrimonio}, ${idProdutoAlmoxarifado}, ${idUsuario}, ${custoAtual}, ${custoMedio}, '${format(data, 'yyyy-MM-dd')}', ${estoqueMovimentado}, ${horimetro}, ${numeroRequisicao ? numeroRequisicao : null}, ${quantidade}, ${statusProcessamento}, ${totalAtual}, ${totalMedio}) RETURNING ID`,
        FirebirdAbastecimentosMapper.toCreateDomain,
      )
    )[0];
  }
}

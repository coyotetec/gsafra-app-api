import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { CreatedAbastecimento } from 'src/modules/abastecimentos/entities/created-abastecimento.entity';
import { RequisicaoProduto } from 'src/modules/requisicao-produto/entities/requisicao.entity';
import { RequisicaoProdutoRepository } from 'src/modules/requisicao-produto/requisicao-produto.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdRequisicaoProdutoMapper } from '../mappers/firebird-requisicao-produto.mapper';
import { FirebirdRequisicaoMapper } from '../mappers/firebird-requisicao.mapper';

@Injectable()
export class FirebirdRequisicaoProdutoRepository
  implements RequisicaoProdutoRepository
{
  constructor(private readonly firebirdServices: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<RequisicaoProduto[]> {
    return this.firebirdServices.query<RequisicaoProduto>(
      host,
      code,
      `SELECT * FROM REQUISICAO_ALMOXARIFADO_D ${lastUpdatedAt ? `WHERE DATA_REQUISICAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''} ORDER BY ID`,
      FirebirdRequisicaoProdutoMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    requisicao: RequisicaoProduto,
  ): Promise<CreatedAbastecimento> {
    const {
      idRequisicaoAlmoxarifadoM,
      idProdutoAlmoxarifado,
      descricaoProdutoSemCadastro,
      und,
      dataHoraAtualInclusao,
      dataHoraAtualEdicao,
      quantidade,
      precoAtual,
      custoMedioAtual,
      observacoes,
    } = requisicao;
    return (
      await this.firebirdServices.query<CreatedAbastecimento>(
        host,
        code,
        `INSERT INTO REQUISICAO_ALMOXARIFADO_D
         (ID,  ID_REQUISICAO_ALMOXARIFADO_M, ID_PRODUTO_ALMOXARIFADO,
         DESCRICAO_PRODUTO_SEM_CADASTRO, UND, DATA_HORA_ATUAL_INCLUSAO, DATA_HORA_ATUAL_EDICAO, QUANTIDADE,
          PRECO_ATUAL, CUSTO_MEDIO_ATUAL, ID_REQUISICAO_ALMOXARIFADO_D, OBSERVACOES)
         VALUES
         (GEN_ID(GEN_REQUISICAO_ALMOXARIFADO_D, 1), ${idRequisicaoAlmoxarifadoM}, ${idProdutoAlmoxarifado}, '${descricaoProdutoSemCadastro}', '${und}','${dataHoraAtualInclusao}',
         '${dataHoraAtualEdicao}', ${quantidade}, ${precoAtual}, ${custoMedioAtual}, null, '${observacoes}')`,
        FirebirdRequisicaoMapper.toCreatedDomain,
      )
    )[0];
  }
}

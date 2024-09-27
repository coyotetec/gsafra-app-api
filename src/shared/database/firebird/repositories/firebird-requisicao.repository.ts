import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { Requisicao } from 'src/modules/requisicao/entities/requisicao.entity';
import { RequisicaoRepository } from 'src/modules/requisicao/requisicao.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdRequisicaoMapper } from '../mappers/firebird-requisicao.mapper';
import { CreatedAbastecimento } from 'src/modules/abastecimentos/entities/created-abastecimento.entity';

@Injectable()
export class FirebirdRequisicaoRepository implements RequisicaoRepository {
  constructor(private readonly firebirdServices: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Requisicao[]> {
    return this.firebirdServices.query<Requisicao>(
      host,
      code,
      `SELECT * FROM REQUISICAO_ALMOXARIFADO_M ${lastUpdatedAt ? `WHERE DATA_REQUISICAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd')}' ` : ''}`,
      FirebirdRequisicaoMapper.toDomain,
    );
  }

  async create(host: string, code: string, requisicao: Requisicao) {
    const {
      numeroRequisicao,
      dataRequisicao,
      solicitante,
      idUsuarioInclusao,
      dataHoraAtualInclusao,
      dataHoraAtualEdicao,
      idUsuarioEdicao,
      observacao,
      situacao,
      descricao,
      tipo,
      requisicaoProduto,
    } = requisicao;
    const [date] = dataRequisicao.split('T');
    return (
      await this.firebirdServices
        .query<CreatedAbastecimento>(
          host,
          code,
          `INSERT INTO REQUISICAO_ALMOXARIFADO_M
        (ID,  NUMERO_REQUISICAO, DATA_REQUISICAO,
        SOLICITANTE, ID_USUARIO_INCLUSAO, DATA_HORA_ATUAL_INCLUSAO, DATA_HORA_ATUAL_EDICAO, ID_USUARIO_EDICAO,
         OBSERVACOES, SITUACAO, DESCRICAO, TIPO)
        VALUES
        (GEN_ID(GEN_REQUISICAO_ALMOXARIFADO_M, 1), ${numeroRequisicao}, '${date}', '${solicitante}', ${idUsuarioInclusao},'${dataHoraAtualInclusao}',
        '${dataHoraAtualEdicao}', ${idUsuarioEdicao}, '${observacao}', ${situacao}, '${descricao}', ${tipo})  RETURNING ID`,
          FirebirdRequisicaoMapper.toCreatedDomain,
        )
        .then(async (response) => {
          const [{ id }] = response;
          for (const produto of requisicaoProduto) {
            const {
              descricaoProdutoSemCadastro,
              und,
              idProdutoAlmoxarifado,
              dataHoraAtualInclusao,
              dataHoraAtualEdicao,
              quantidade,
              precoAtual,
              custoMedioAtual,
              observacoes,
            } = produto;
            await this.firebirdServices.query(
              host,
              code,
              `INSERT INTO REQUISICAO_ALMOXARIFADO_D
             (ID,  ID_REQUISICAO_ALMOXARIFADO_M, ID_PRODUTO_ALMOXARIFADO,
             DESCRICAO_PRODUTO_SEM_CADASTRO, UND, DATA_HORA_ATUAL_INCLUSAO, DATA_HORA_ATUAL_EDICAO, QUANTIDADE,
              PRECO_ATUAL, CUSTO_MEDIO_ATUAL, ID_REQUISICAO_ALMOXARIFADO_D, OBSERVACOES)
             VALUES
             (GEN_ID(GEN_REQUISICAO_ALMOXARIFADO_D, 1), ${id}, ${idProdutoAlmoxarifado}, '${descricaoProdutoSemCadastro}', '${und}',
             '${dataHoraAtualInclusao}', '${dataHoraAtualEdicao}', ${quantidade}, ${precoAtual}, ${custoMedioAtual}, null, '${observacoes}')`,
            );
          }
          return response;
        })
    )[0];
  }
}

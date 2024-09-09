import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { RequisicaoProdutoRepository } from './requisicao-produto.repository';
import { CreateProdutoRequisicaoDto } from './dto/create-requisicao-produto.dto';
import { RequisicaoProduto } from './entities/requisicao.entity';

@Injectable()
export class RequisicaoProdutoService {
  constructor(
    private readonly requisicaoRespository: RequisicaoProdutoRepository,
  ) {}
  findAll({ host, code }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.requisicaoRespository.findMany({ host, code }, lastUpdatedAt);
  }
  async create(
    host: string,
    code: string,
    payload: CreateProdutoRequisicaoDto,
  ) {
    await this.requisicaoRespository.create(
      host,
      code,
      new RequisicaoProduto({
        idRequisicaoAlmoxarifadoM: payload.idRequisicaoAlmoxarifadoM,
        idProdutoAlmoxarifado: payload.idProdutoAlmoxarifado,
        descricaoProdutoSemCadastro: payload.descricaoProdutoSemCadastro,
        und: payload.und,
        dataHoraAtualInclusao: payload.dataHoraAtualInclusao,
        dataHoraAtualEdicao: payload.dataHoraAtualEdicao,
        quantidade: payload.quantidade,
        precoAtual: payload.precoAtual,
        custoMedioAtual: payload.custoMedioAtual,
        observacoes: payload.observacoes,
      }),
    );
  }
}

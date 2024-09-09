import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { RequisicaoRepository } from './requisicao.repository';
import { CreateRequisicaoDto } from './dto/create-requisicao.dto';
import { Requisicao } from './entities/requisicao.entity';

@Injectable()
export class RequisicaoService {
  constructor(private readonly requisicaoRespository: RequisicaoRepository) {}
  findAll({ host, code }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.requisicaoRespository.findMany({ host, code }, lastUpdatedAt);
  }
  async create(host: string, code: string, payload: CreateRequisicaoDto) {
    const insertData = await this.requisicaoRespository.create(
      host,
      code,
      new Requisicao({
        numeroRequisicao: payload.numeroRequisicao,
        dataRequisicao: payload.dataRequisicao,
        solicitante: payload.solicitante,
        idUsuarioInclusao: payload.idUsuarioInclusao,
        dataHoraAtualInclusao: payload.dataHoraAtualInclusao,
        dataHoraAtualEdicao: payload.dataHoraAtualEdicao,
        idUsuarioEdicao: payload.idUsuarioEdicao,
        observacao: payload.observacao,
        situacao: payload.situacao,
        descricao: payload.descricao,
        tipo: payload.tipo,
        requisicaoProduto: payload.requisicaoProduto,
      }),
    );
    return {
      id: insertData?.id,
    };
  }
}

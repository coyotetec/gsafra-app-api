import { Injectable } from '@nestjs/common';
import { ManutencaoRepository } from './manutencao.repository';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';

@Injectable()
export class ManutencaoService {
  constructor(
    private manutencaoRepository: ManutencaoRepository,
  ) { }

  findById(host: string, code: string, lastUpdatedAt?: Date, id?: number) {
    return this.manutencaoRepository.findById(host, code, lastUpdatedAt, id);
  }
  findBySafraId(host: string, code: string, lastUpdatedAt?: Date, safraId?: number) {
    return this.manutencaoRepository.findBySafraId(host, code, lastUpdatedAt, safraId);
  }
  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.manutencaoRepository.findMany(host, code, lastUpdatedAt);
  }

  async create(host: string, code: string, payload: CreateManutencaoDto) {
    return this.manutencaoRepository.create(
      host,
      code,
      {
        date: payload.date,
        horimetro: payload.horimetro,
        descricao: payload.descricao,
        situacao: payload.situacao,
        totalServico: payload.totalServico,
        totalPecas: payload.totalPecas,
        totalGeral: payload.totalGeral,
        idPessoa: payload.idPessoa,
        idPatrimonio: payload.idPatrimonio,
        idFornecedor: payload.idFornecedor,
        tipoManutencao: payload.tipoManutencao,
        ...payload
      },
    );
  }
}

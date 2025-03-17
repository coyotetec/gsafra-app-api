import { Injectable } from '@nestjs/common';
import { ManutencaoRepository } from './manutencao.repository';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';

@Injectable()
export class ManutencaoService {
  constructor(
    private manutencaoRepository: ManutencaoRepository,
  ) { }

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.manutencaoRepository.findMany(host, code, lastUpdatedAt);
  }

  async create(host: string, code: string, payload: CreateManutencaoDto) {
    return this.manutencaoRepository.create(
      host,
      code,
      payload,
    );
  }
}

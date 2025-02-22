import { Injectable } from '@nestjs/common';
import { ManutencaoCicloRepository } from './manutencao-ciclo.repository';

@Injectable()
export class ManutencaoCicloService {
  constructor(private manutencaoRepository: ManutencaoCicloRepository) { }
  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.manutencaoRepository.findMany(host, code, lastUpdatedAt);
  }
}

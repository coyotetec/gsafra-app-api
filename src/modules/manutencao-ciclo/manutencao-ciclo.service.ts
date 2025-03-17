import { Injectable } from '@nestjs/common';
import { ManutencaoCicloRepository } from './manutencao-ciclo.repository';
import { CreateManutencaoCicloDto } from './dto/create-manutencao-ciclo.dto';

@Injectable()
export class ManutencaoCicloService {
  constructor(private manutencaoRepository: ManutencaoCicloRepository) { }
  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.manutencaoRepository.findMany(host, code, lastUpdatedAt);
  }
  create(host: string, code: string, manutencao: CreateManutencaoCicloDto) {
    return this.manutencaoRepository.createCiclo(host, code, manutencao);
  } 
}

import { Injectable } from '@nestjs/common';
import { PlanejamentosAtividadesMaquinasRepository } from './planejamentos-atividades-maquinas.repository';

@Injectable()
export class PlanejamentosAtividadesMaquinasService {
  constructor(
    private planejamentosAtividadesMaquinasRepository: PlanejamentosAtividadesMaquinasRepository,
  ) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.planejamentosAtividadesMaquinasRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

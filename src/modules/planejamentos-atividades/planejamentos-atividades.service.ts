import { Injectable } from '@nestjs/common';
import { PlanejamentosAtividadesRepository } from './planejamentos-atividades.repository';

@Injectable()
export class PlanejamentosAtividadesService {
  constructor(
    private planejamentosAtividadesRepository: PlanejamentosAtividadesRepository,
  ) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.planejamentosAtividadesRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
  }
}

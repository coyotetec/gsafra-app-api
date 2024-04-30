import { Injectable } from '@nestjs/common';
import { PlanejamentosAtividadesTalhoesSafrasRepository } from './planejamentos-atividades-talhoes-safras.repository';

@Injectable()
export class PlanejamentosAtividadesTalhoesSafrasService {
  constructor(
    private planejamentosAtividadesTalhoesSafrasRepository: PlanejamentosAtividadesTalhoesSafrasRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.planejamentosAtividadesTalhoesSafrasRepository.findMany(
      host,
      code,
    );
  }
}

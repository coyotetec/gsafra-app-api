import { Injectable } from '@nestjs/common';
import { PlanejamentosAtividadesInsumosRepository } from './planejamentos-atividades-insumos.repository';

@Injectable()
export class PlanejamentosAtividadesInsumosService {
  constructor(
    private planejamentosAtividadesInsumosRepository: PlanejamentosAtividadesInsumosRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.planejamentosAtividadesInsumosRepository.findMany(host, code);
  }
}

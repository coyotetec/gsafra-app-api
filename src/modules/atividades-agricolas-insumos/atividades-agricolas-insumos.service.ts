import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasInsumosRepository } from './atividades-agricolas-insumos.repository';

@Injectable()
export class AtividadesAgricolasInsumosService {
  constructor(
    private atividadesAgricolasInsumosRepository: AtividadesAgricolasInsumosRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.atividadesAgricolasInsumosRepository.findMany(host, code);
  }
}

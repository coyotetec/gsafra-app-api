import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasRepository } from './atividades-agricolas.repository';

@Injectable()
export class AtividadesAgricolasService {
  constructor(
    private atividadesAgricolasRepository: AtividadesAgricolasRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.atividadesAgricolasRepository.findMany(host, code);
  }
}

import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasMaquinasRepository } from './atividades-agricolas-maquinas.repository';

@Injectable()
export class AtividadesAgricolasMaquinasService {
  constructor(
    private atividadesAgricolasMaquinasRepository: AtividadesAgricolasMaquinasRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.atividadesAgricolasMaquinasRepository.findMany(host, code);
  }
}

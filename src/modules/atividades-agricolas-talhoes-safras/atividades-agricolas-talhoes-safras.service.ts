import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasTalhoesSafrasRepository } from './atividades-agricolas-talhoes-safras.repository';

@Injectable()
export class AtividadesAgricolasTalhoesSafrasService {
  constructor(
    private atividadesAgricolasTalhoesSafrasRepository: AtividadesAgricolasTalhoesSafrasRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.atividadesAgricolasTalhoesSafrasRepository.findMany(host, code);
  }
}

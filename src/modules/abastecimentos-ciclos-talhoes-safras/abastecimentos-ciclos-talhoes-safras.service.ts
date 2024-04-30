import { Injectable } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasRepository } from './abastecimentos-ciclos-talhoes-safras.repository';

@Injectable()
export class AbastecimentosCiclosTalhoesSafrasService {
  constructor(
    private abastecimentosCiclosTalhoesSafrasRepository: AbastecimentosCiclosTalhoesSafrasRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.abastecimentosCiclosTalhoesSafrasRepository.findMany(
      host,
      code,
    );
  }
}

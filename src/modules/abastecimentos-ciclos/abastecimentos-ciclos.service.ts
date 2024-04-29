import { Injectable } from '@nestjs/common';
import { AbastecimentosCiclosRepository } from './abastecimentos-ciclos.repository';

@Injectable()
export class AbastecimentosCiclosService {
  constructor(
    private abastecimentosCiclosRepository: AbastecimentosCiclosRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.abastecimentosCiclosRepository.findMany(host, code);
  }
}

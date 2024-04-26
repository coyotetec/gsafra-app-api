import { Injectable } from '@nestjs/common';
import { AbastecimentosRepository } from './abastecimentos.repository';

@Injectable()
export class AbastecimentosService {
  constructor(private abastecimentosRepository: AbastecimentosRepository) {}

  findAll(host: string, code: string) {
    return this.abastecimentosRepository.findMany(host, code);
  }
}

import { Injectable } from '@nestjs/common';
import { ManutencaoServicoProdutoRepository } from './manutencao-servico-produto.repository';

@Injectable()
export class ManutencaoServicoProdutoService {
  constructor(private manutencaoRepository: ManutencaoServicoProdutoRepository) { }
  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.manutencaoRepository.findMany(host, code, lastUpdatedAt);
  }
}

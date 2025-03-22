import { Injectable } from '@nestjs/common';
import { EstoqueRepository } from './estoque.repository';

@Injectable()
export class EstoqueService {
  constructor(
    private repository: EstoqueRepository,
  ) { }

  find(host: string, code: string, lastUpdatedAt?: Date, ) {
    return this.repository.findAll(host, code, lastUpdatedAt);
  }
 
}

import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FornecedorRepository } from './fornecedor.repository';

@Injectable()
export class FornecedorService {
  constructor(
    private readonly repository: FornecedorRepository,
  ) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.repository.findMany(
      { code, host },
      lastUpdatedAt,
    );
  }
}

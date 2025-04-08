import { Injectable } from '@nestjs/common';
import { Fornecedor } from 'src/modules/fornecedor/entities/fornecedor.entity';
import { FornecedorRepository } from 'src/modules/fornecedor/fornecedor.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdFornecedorMapper } from '../mappers/firebird-fornecedor.mapper';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';

@Injectable()
export class FirebirdFornecedorRepositoryData
  implements FornecedorRepository {
  constructor(private firebird: FirebirdService) { }

  findMany({ host, code }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.firebird.query<Fornecedor>(
      host,
      code,
      `SELECT * FROM FORNECEDOR `,
      FirebirdFornecedorMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { ProdutosAlmoxarifadoRepository } from './produtos-almoxarifado.repository';

@Injectable()
export class ProdutosAlmoxarifadoService {
  constructor(
    private readonly produtosAlmoxarifadoRepository: ProdutosAlmoxarifadoRepository,
  ) {}
  findAll({ host, code }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.produtosAlmoxarifadoRepository.findMany(
      { host, code },
      lastUpdatedAt,
    );
  }
}

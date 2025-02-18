import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TiposManutencaoRepository } from './tipos-manutencao.repository';

@Injectable()
export class TiposManutencaoService {
  constructor(
    private readonly tiposManutencaoRepository: TiposManutencaoRepository,
  ) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.tiposManutencaoRepository.findMany(
      { code, host },
      lastUpdatedAt,
    );
  }
}

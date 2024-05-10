import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FasesAplicacaoRepository } from './fases-aplicacao.repository';

@Injectable()
export class FasesAplicacaoService {
  constructor(
    private readonly fasesAplicacaoRepository: FasesAplicacaoRepository,
  ) {}

  findAll({ code, host }: DBConnectionDataType) {
    return this.fasesAplicacaoRepository.findMany({ code, host });
  }
}

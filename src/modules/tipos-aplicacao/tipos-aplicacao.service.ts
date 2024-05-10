import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TiposAplicacaoRepository } from './tipos-aplicacao.repository';

@Injectable()
export class TiposAplicacaoService {
  constructor(
    private readonly tiposAplicacaoRepository: TiposAplicacaoRepository,
  ) {}
  findAll({ code, host }: DBConnectionDataType) {
    return this.tiposAplicacaoRepository.findAll({ code, host });
  }
}

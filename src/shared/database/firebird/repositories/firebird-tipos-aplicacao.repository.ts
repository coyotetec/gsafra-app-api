import { Injectable } from '@nestjs/common';
import { TipoAplicacao } from 'src/modules/tipos-aplicacao/entities/tipo-aplicacao.entity';
import { TiposAplicacaoRepository } from 'src/modules/tipos-aplicacao/tipos-aplicacao.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdTiposAplicacaoMapper } from '../mappers/firebird-tipos-aplicacao.mapper';

@Injectable()
export class FirebirdTiposAplicacaoRepository
  implements TiposAplicacaoRepository
{
  constructor(private readonly firebirdService: FirebirdService) {}

  findAll({ code, host }: DBConnectionDataType): Promise<TipoAplicacao[]> {
    return this.firebirdService.query<TipoAplicacao>(
      host,
      code,
      'SELECT * FROM AGRI_TIPO_APLICACAO',
      FirebirdTiposAplicacaoMapper.toDomain,
    );
  }
}

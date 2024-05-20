import { Injectable } from '@nestjs/common';
import { FasesAplicacaoRepository } from 'src/modules/fases-aplicacao/fases-aplicacao.repository';
import { FirebirdService } from '../firebird.service';
import { FaseAplicacao } from 'src/modules/fases-aplicacao/entities/fase-aplicacao.entity';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdFasesAplicacaoMapper } from '../mappers/firebird-fases-aplicacao.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdFasesAplicacaoRepository
  implements FasesAplicacaoRepository
{
  constructor(private firebirdService: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<FaseAplicacao[]> {
    return this.firebirdService.query<FaseAplicacao>(
      host,
      code,
      `SELECT * FROM AGRI_APLICACAO_FASE ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdFasesAplicacaoMapper.toDomain,
    );
  }
}

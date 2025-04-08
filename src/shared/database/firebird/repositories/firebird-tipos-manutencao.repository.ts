import { Injectable } from '@nestjs/common';
import { TiposAtividadesRepository } from 'src/modules/tipos-atividades/tipos-atividades.repository';
import { TipoManutencao } from 'src/modules/tipos-manutencao/entities/tipos-manutencao.entity';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdTiposManutencaoMapper } from '../mappers/firebird-tipos-manutencao.mapper';

@Injectable()
export class FirebirdTiposManutencaoRepository
  implements TiposAtividadesRepository
{
  constructor(private readonly firebirdService: FirebirdService) {}

  async findMany({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.firebirdService.query<TipoManutencao>(
      host,
      code,
      `SELECT * FROM TIPO_MANUTENCAO`,
      FirebirdTiposManutencaoMapper.toDomain,
    );
  }
}

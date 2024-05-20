import { Injectable } from '@nestjs/common';
import { TiposAtividadesRepository } from 'src/modules/tipos-atividades/tipos-atividades.repository';
import { FirebirdService } from '../firebird.service';
import { TipoAtividade } from 'src/modules/tipos-atividades/entities/tipos-atividade.entity';
import { FirebirdTiposAtividadesMapper } from '../mappers/firebird-tipos-atividades.mapper';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { format } from 'date-fns';

@Injectable()
export class FirebirdTiposAtividadesRepository
  implements TiposAtividadesRepository
{
  constructor(private readonly firebirdService: FirebirdService) {}

  async findMany({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.firebirdService.query<TipoAtividade>(
      host,
      code,
      `SELECT * FROM TIPO_ATIVIDADE ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdTiposAtividadesMapper.toDomain,
    );
  }
}

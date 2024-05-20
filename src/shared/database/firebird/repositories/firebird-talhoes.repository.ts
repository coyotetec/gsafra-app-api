import { Injectable } from '@nestjs/common';
import { Talhao } from 'src/modules/talhoes/entities/talhao.entity';
import { TalhoesRepository } from 'src/modules/talhoes/talhoes.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FireBirdTalhoesMapper } from '../mappers/firebird-talhoes.mapper';
import { format } from 'date-fns';

@Injectable()
export class FireBirdTalhoesRepository implements TalhoesRepository {
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Talhao[]> {
    return this.firebirdService.query<Talhao>(
      host,
      code,
      `SELECT * FROM TALHAO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FireBirdTalhoesMapper.toDomain,
    );
  }
}

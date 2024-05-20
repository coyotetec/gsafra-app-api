import { Injectable } from '@nestjs/common';
import { Safra } from 'src/modules/safras/entities/safra.entity';
import { SafrasRepository } from 'src/modules/safras/safras.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FireBirdSafrasMapper } from '../mappers/firebird-safras.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdSafrasRepository implements SafrasRepository {
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany(
    { host, code }: DBConnectionDataType,
    lastUpdatedAt?: Date,
  ): Promise<Safra[]> {
    return this.firebirdService.query<Safra>(
      host,
      code,
      `SELECT * FROM PLAN_ATV_INSUMO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FireBirdSafrasMapper.toDomain,
    );
  }
}

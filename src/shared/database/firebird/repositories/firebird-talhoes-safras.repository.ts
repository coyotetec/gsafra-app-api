import { Injectable } from '@nestjs/common';
import { TalhaoSafra } from 'src/modules/talhoes-safras/entities/talhao-safra.entity';
import { TalhoesSafrasRepository } from 'src/modules/talhoes-safras/talhoes-safras.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdTalhoesSafraMapper } from '../mappers/firebird-talhoes-safras.mapper';
import { TalhaoSafraArea } from 'src/modules/talhoes-safras/entities/talhao-safra-area.entity';

@Injectable()
export class FirebirdTalhoesSafraRepository implements TalhoesSafrasRepository {
  constructor(private readonly firebird: FirebirdService) {}

  findMany({ code, host }: DBConnectionDataType): Promise<TalhaoSafra[]> {
    return this.firebird.query<TalhaoSafra>(
      host,
      code,
      'SELECT * FROM TALHAO_SAFRA',
      FirebirdTalhoesSafraMapper.toDomain,
    );
  }

  async findArea(host: string, code: string, safraId: number) {
    return (
      await this.firebird.query<TalhaoSafraArea>(
        host,
        code,
        `SELECT
          COALESCE(SUM(ts.HECTARES), 0) AS AREA 
        FROM TALHAO_SAFRA ts 
        WHERE ts.ID_CICLO_PRODUCAO IN (${safraId})`,
        FirebirdTalhoesSafraMapper.toAreaDomain,
      )
    )[0].area;
  }
}

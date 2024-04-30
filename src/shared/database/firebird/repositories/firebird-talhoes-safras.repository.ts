import { Injectable } from '@nestjs/common';
import { TalhaoSafra } from 'src/modules/talhoes-safras/entities/talhao-safra.entity';
import { TalhoesSafrasRepository } from 'src/modules/talhoes-safras/talhoes-safras.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { FirebirdService } from '../firebird.service';
import { FirebirdTalhoesSafraMapper } from '../mappers/firebird-talhoes-safras.mapper';

@Injectable()
export class FirebirdTalhoesSafraRepository implements TalhoesSafrasRepository {
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany({ code, host }: DBConnectionDataType): Promise<TalhaoSafra[]> {
    return this.firebirdService.query<TalhaoSafra>(
      host,
      code,
      'SELECT * FROM TALHAO_SAFRA',
      FirebirdTalhoesSafraMapper.toDomain,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { PatrimoniosRepository } from 'src/modules/patrimonios/patrimonios.repository';
import { FirebirdService } from '../firebird.service';
import { Patrimonio } from 'src/modules/patrimonios/entities/patrimonio.entity';
import { FirebirdPatrimoniosMapper } from '../mappers/firebird-patrimonios.mapper';

@Injectable()
export class FirebirdPatrimoniosRepository implements PatrimoniosRepository {
  constructor(private firebird: FirebirdService) {}
  findMany(host: string, code: string): Promise<Patrimonio[]> {
    return this.firebird.query<Patrimonio>(
      host,
      code,
      'SELECT * FROM PATRIMONIO',
      FirebirdPatrimoniosMapper.toDomain,
    );
  }
}

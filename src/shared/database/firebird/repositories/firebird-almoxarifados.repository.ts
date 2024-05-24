import { Injectable } from '@nestjs/common';
import { AlmoxarifadosRepository } from 'src/modules/almoxarifados/almoxarifados.repository';
import { Almoxarifado } from 'src/modules/almoxarifados/entities/almoxarifado.entity';
import { FirebirdService } from '../firebird.service';
import { FirebirdAlmoxarifadosMapper } from '../mappers/firebird-almoxarifados.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdAlmoxarifadosRepository
  implements AlmoxarifadosRepository
{
  constructor(private readonly firebirdService: FirebirdService) {}

  findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<Almoxarifado[]> {
    return this.firebirdService.query<Almoxarifado>(
      host,
      code,
      `SELECT * FROM ALMOXARIFADO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdAlmoxarifadosMapper.toDomain,
    );
  }
}

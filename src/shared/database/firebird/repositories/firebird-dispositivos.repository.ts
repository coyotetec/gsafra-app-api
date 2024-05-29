import { Injectable } from '@nestjs/common';
import { DispositivosRepository } from 'src/modules/dispositivos/dispositivos.repository';
import { FirebirdService } from '../firebird.service';
import { Dispositivo } from 'src/modules/dispositivos/entities/dispositivo.entity';
import { FirebirdDispositivosMapper } from '../mappers/firebird-dispositivos.mapper';

@Injectable()
export class FirebirdDispositivosRepository implements DispositivosRepository {
  constructor(private firebird: FirebirdService) {}

  async findById(host: string, code: string, id: number): Promise<Dispositivo> {
    return (
      await this.firebird.query<Dispositivo>(
        host,
        code,
        `SELECT * FROM DISPOSITIVO WHERE ID = ${id}`,
        FirebirdDispositivosMapper.toDomain,
      )
    )[0];
  }

  async create(host: string, code: string, dispositivo: Dispositivo) {
    const { nome, informacoes, status } = dispositivo;

    return (
      await this.firebird.query<Dispositivo>(
        host,
        code,
        `INSERT INTO DISPOSITIVO (ID, NOME, INFORMACOES, STATUS) VALUES (GEN_ID(GEN_DISPOSITIVO, 1), '${nome}', '${informacoes}', ${status}) RETURNING ID, NOME, INFORMACOES, STATUS`,
        FirebirdDispositivosMapper.toDomain,
      )
    )[0];
  }
}

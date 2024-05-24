import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { FirebirdService } from '../firebird.service';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { FirebirdUsuariosMapper } from '../mappers/firebird-usuarios.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdUsuariosRepository implements UsuariosRepository {
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<Usuario>(
      host,
      code,
      `SELECT * FROM USUARIO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdUsuariosMapper.toDomain,
    );
  }
}

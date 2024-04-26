import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { FirebirdService } from '../firebird.service';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { FirebirdUsuariosMapper } from '../mappers/firebird-usuarios.mapper';

@Injectable()
export class FirebirdUsuariosRepository implements UsuariosRepository {
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, string: string) {
    return this.firebird.query<Usuario>(
      host,
      string,
      'SELECT * FROM usuario',
      FirebirdUsuariosMapper.toDomain,
    );
  }
}

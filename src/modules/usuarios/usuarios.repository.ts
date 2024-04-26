import { Usuario } from './entities/usuario.entity';

export abstract class UsuariosRepository {
  abstract findMany(host: string, code: string): Promise<Usuario[]>;
}

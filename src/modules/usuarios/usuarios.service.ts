import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';

@Injectable()
export class UsuariosService {
  constructor(private usuariosRepository: UsuariosRepository) {}

  findAll(host: string, code: string) {
    return this.usuariosRepository.findMany(host, code);
  }
}

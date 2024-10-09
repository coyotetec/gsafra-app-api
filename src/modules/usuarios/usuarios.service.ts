import { Injectable } from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';

@Injectable()
export class UsuariosService {
  constructor(private usuariosRepository: UsuariosRepository) {}

  async findAll(host: string, code: string, lastUpdatedAt?: Date) {
    const data = await this.usuariosRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
    return data;
  }
}

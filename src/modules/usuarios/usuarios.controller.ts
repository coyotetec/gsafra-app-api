import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.usuariosService.findAll(host, code);
  }
}

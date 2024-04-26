import { Controller, Get, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(@Query('host') host: string, @Query('code') code: string) {
    return this.usuariosService.findAll(host, code);
  }
}

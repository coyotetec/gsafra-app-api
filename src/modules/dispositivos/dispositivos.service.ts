import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { Dispositivo, StatusType } from './entities/dispositivo.entity';
import { DispositivosRepository } from './dispositivos.repository';

@Injectable()
export class DispositivosService {
  constructor(private dispositivosRepository: DispositivosRepository) {}

  create(
    host: string,
    code: string,
    createDispositivoDto: CreateDispositivoDto,
  ) {
    return this.dispositivosRepository.create(
      host,
      code,
      new Dispositivo({
        nome: createDispositivoDto.name,
        informacoes: createDispositivoDto.info,
        status: code === '000115' ? StatusType.ATIVO : StatusType.INATIVO,
      }),
    );
  }

  findById(host: string, code: string, id: number) {
    return this.dispositivosRepository.findById(host, code, id);
  }
}

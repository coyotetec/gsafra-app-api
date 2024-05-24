import { Injectable } from '@nestjs/common';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { Dispositivo, StatusType } from './entities/dispositivo.entity';

@Injectable()
export class DispositivosService {
  create(
    host: string,
    code: string,
    createDispositivoDto: CreateDispositivoDto,
  ) {
    return new Dispositivo({
      id: 1,
      informacoes: createDispositivoDto.info,
      nome: createDispositivoDto.name,
      status: StatusType.INATIVO,
    });
  }

  findById(host: string, code: string, id: number) {
    return new Dispositivo({
      id,
      informacoes: 'Infos do dispositivo',
      nome: 'Nome do dispositivo',
      status: StatusType.INATIVO,
    });
  }
}

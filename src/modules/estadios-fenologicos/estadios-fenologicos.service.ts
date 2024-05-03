import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { EstadiosFenologicosRepository } from './estadios-fenologicos.repository';

@Injectable()
export class EstadiosFenologicosService {
  constructor(
    private readonly estadiosFenologicosRepository: EstadiosFenologicosRepository,
  ) {}

  findAll({ code, host }: DBConnectionDataType) {
    return this.estadiosFenologicosRepository.findAll({ code, host });
  }
}

import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { AlmoxarifadosRepository } from './almoxarifados.repository';

@Injectable()
export class AlmoxarifadosService {
  constructor(
    private readonly almoxarifadosRepository: AlmoxarifadosRepository,
  ) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.almoxarifadosRepository.findMany(host, code, lastUpdatedAt);
  }
}

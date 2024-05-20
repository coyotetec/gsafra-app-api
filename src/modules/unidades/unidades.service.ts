import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { UnidadesRepository } from './unidades.repository';

@Injectable()
export class UnidadesService {
  constructor(private readonly unidadesRepository: UnidadesRepository) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.unidadesRepository.findMany({ code, host }, lastUpdatedAt);
  }
}

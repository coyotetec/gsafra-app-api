import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { VariedadesRepository } from './variedades.repository';

@Injectable()
export class VariedadesService {
  constructor(private readonly variedadesRepository: VariedadesRepository) {}

  findAll({ host, code }: DBConnectionDataType) {
    return this.variedadesRepository.findMany({ host, code });
  }
}

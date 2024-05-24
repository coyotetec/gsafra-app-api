import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { CulturasRepository } from './culturas.repository';

@Injectable()
export class CulturasService {
  constructor(private readonly culturasRepository: CulturasRepository) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.culturasRepository.findMany({ code, host }, lastUpdatedAt);
  }
}

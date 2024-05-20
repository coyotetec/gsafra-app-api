import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { SafrasRepository } from './safras.repository';

@Injectable()
export class SafrasService {
  constructor(private readonly safraRepository: SafrasRepository) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.safraRepository.findMany({ code, host }, lastUpdatedAt);
  }
}

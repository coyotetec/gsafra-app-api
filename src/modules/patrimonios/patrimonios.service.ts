import { Injectable } from '@nestjs/common';
import { PatrimoniosRepository } from './patrimonios.repository';

@Injectable()
export class PatrimoniosService {
  constructor(private patrimoniosRepository: PatrimoniosRepository) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.patrimoniosRepository.findMany(host, code, lastUpdatedAt);
  }
}

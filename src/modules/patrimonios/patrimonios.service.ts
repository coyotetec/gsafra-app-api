import { Injectable } from '@nestjs/common';
import { PatrimoniosRepository } from './patrimonios.repository';

@Injectable()
export class PatrimoniosService {
  constructor(private patrimoniosRepository: PatrimoniosRepository) {}

  findAll(host: string, code: string) {
    return this.patrimoniosRepository.findMany(host, code);
  }
}

import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TalhoesRepository } from './talhoes.repository';

@Injectable()
export class TalhoesService {
  constructor(private readonly talhoesRepository: TalhoesRepository) {}
  findAll({ code, host }: DBConnectionDataType) {
    return this.talhoesRepository.findMany({ code, host });
  }
}

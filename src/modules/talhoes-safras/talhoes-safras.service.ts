import { Injectable } from '@nestjs/common';
import { TalhoesSafrasRepository } from './talhoes-safras.repository';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';

@Injectable()
export class TalhoesSafrasService {
  constructor(
    private readonly talhoesSafrasRepository: TalhoesSafrasRepository,
  ) {}
  findAll({ code, host }: DBConnectionDataType) {
    return this.talhoesSafrasRepository.findMany({ code, host });
  }
}

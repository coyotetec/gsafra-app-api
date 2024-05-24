import { Injectable } from '@nestjs/common';
import { DBConnectionDataType } from 'src/shared/decorators/DBConnectionData';
import { TiposAtividadesRepository } from './tipos-atividades.repository';

@Injectable()
export class TiposAtividadesService {
  constructor(
    private readonly tiposAtividadesRepository: TiposAtividadesRepository,
  ) {}

  findAll({ code, host }: DBConnectionDataType, lastUpdatedAt?: Date) {
    return this.tiposAtividadesRepository.findMany(
      { code, host },
      lastUpdatedAt,
    );
  }
}

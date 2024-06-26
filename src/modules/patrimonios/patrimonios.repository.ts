import { Patrimonio } from './entities/patrimonio.entity';

export abstract class PatrimoniosRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<Patrimonio[]>;
}

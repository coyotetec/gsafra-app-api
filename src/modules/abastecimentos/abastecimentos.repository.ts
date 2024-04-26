import { Abastecimento } from './entities/abastecimento.entity';

export abstract class AbastecimentosRepository {
  abstract findMany(host: string, code: string): Promise<Abastecimento[]>;
}

import { AtividadeAgricola } from './entities/atividade-agricola.entity';
import { CreatedAtividadeAgricola } from './entities/created-atividade-agricola.entity';

export abstract class AtividadesAgricolasRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<AtividadeAgricola[]>;

  abstract create(
    host: string,
    code: string,
    atividadeAgricola: AtividadeAgricola,
  ): Promise<CreatedAtividadeAgricola>;
}

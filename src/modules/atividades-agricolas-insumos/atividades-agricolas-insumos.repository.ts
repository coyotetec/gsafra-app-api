import { AtividadeAgricolaInsumo } from './entities/atividade-agricola-insumo.entity';
import { CreatedAtividadeAgricolaInsumo } from './entities/created-atividade-agricola-insumo.entity';

export abstract class AtividadesAgricolasInsumosRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<AtividadeAgricolaInsumo[]>;

  abstract create(
    host: string,
    code: string,
    atividadeAgricolaInsumo: AtividadeAgricolaInsumo,
  ): Promise<CreatedAtividadeAgricolaInsumo>;
}

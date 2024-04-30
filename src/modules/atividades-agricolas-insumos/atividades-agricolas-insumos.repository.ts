import { AtividadeAgricolaInsumo } from './entities/atividade-agricola-insumo.entity';

export abstract class AtividadesAgricolasInsumosRepository {
  abstract findMany(
    host: string,
    code: string,
  ): Promise<AtividadeAgricolaInsumo[]>;
}

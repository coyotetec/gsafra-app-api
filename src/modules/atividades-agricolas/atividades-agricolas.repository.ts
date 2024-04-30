import { AtividadeAgricola } from './entities/atividade-agricola.entity';

export abstract class AtividadesAgricolasRepository {
  abstract findMany(host: string, code: string): Promise<AtividadeAgricola[]>;
}

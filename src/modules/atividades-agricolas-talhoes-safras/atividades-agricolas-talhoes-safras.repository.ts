import { AtividadeAgricolaTalhaoSafra } from './entities/atividade-agricola-talhao-safra.entity';

export abstract class AtividadesAgricolasTalhoesSafrasRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<AtividadeAgricolaTalhaoSafra[]>;

  abstract create(
    host: string,
    code: string,
    atividadeAgricolaTalhaoSafra: AtividadeAgricolaTalhaoSafra,
  ): Promise<void>;
}

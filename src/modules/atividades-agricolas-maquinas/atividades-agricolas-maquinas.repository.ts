import { AtividadeAgricolaMaquina } from './entities/atividade-agricola-maquina.entity';

export abstract class AtividadesAgricolasMaquinasRepository {
  abstract findMany(
    host: string,
    code: string,
  ): Promise<AtividadeAgricolaMaquina[]>;

  abstract create(
    host: string,
    code: string,
    atividadeAgricolaMaquina: AtividadeAgricolaMaquina,
  ): Promise<void>;
}

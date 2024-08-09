import { AtividadeAgricolaMaquina } from './entities/atividade-agricola-maquina.entity';
import { CreatedAtividadeAgricolaMaquina } from './entities/created-atividade-agricola-maquina.entity';

export abstract class AtividadesAgricolasMaquinasRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<AtividadeAgricolaMaquina[]>;

  abstract create(
    host: string,
    code: string,
    atividadeAgricolaMaquina: AtividadeAgricolaMaquina,
  ): Promise<CreatedAtividadeAgricolaMaquina>;
}

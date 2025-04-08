import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { Manutencao } from './entities/manutencao.entity';

export abstract class ManutencaoRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<Manutencao[]>;

  abstract findById(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
    id?: number
  ): Promise<Manutencao[]>;

  abstract findBySafraId(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
    safraId?: number
  ): Promise<Manutencao[]>;

  abstract create(
    host: string,
    code: string,
    manutencao: CreateManutencaoDto,
  );
}

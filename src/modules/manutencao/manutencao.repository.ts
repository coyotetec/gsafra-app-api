import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { Manutencao } from './entities/manutencao.entity';

export abstract class ManutencaoRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<Manutencao[]>;

  abstract create(
    host: string,
    code: string,
    manutencao: CreateManutencaoDto,
  );
}

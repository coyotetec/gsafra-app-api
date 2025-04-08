import { CreateManutencaoCicloDto } from './dto/create-manutencao-ciclo.dto';
import { ManutencaoCiclo } from './entities/manutencao.entity';

export abstract class ManutencaoCicloRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<ManutencaoCiclo[]>;
  abstract createCiclo(
    host: string,
    code: string,
    manutencao: CreateManutencaoCicloDto,
  );
}

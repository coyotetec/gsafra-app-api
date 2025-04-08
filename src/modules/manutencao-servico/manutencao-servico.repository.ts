import { ManutencaoServico } from "./entities/manutencao-servico.entity";

export abstract class ManutencaoServicoRepository {
  abstract findMany(
    host: string,
    code: string,
    lastUpdatedAt?: Date,
  ): Promise<ManutencaoServico[]>;

  // abstract create(
  //   host: string,
  //   code: string,
  //   abastecimento: Manutencao,
  // ): Promise<CreatedAbastecimento>;
}

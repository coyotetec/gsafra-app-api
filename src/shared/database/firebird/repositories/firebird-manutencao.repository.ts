import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { Manutencao } from 'src/modules/manutencao/entities/manutencao.entity';
import { ManutencaoRepository } from 'src/modules/manutencao/manutencao.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdManutencaoMapper } from '../mappers/firebird-manutencao.mapper';

@Injectable()
export class FirebirdManutencaoRepositoryData
  implements ManutencaoRepository {
  constructor(private firebird: FirebirdService) { }

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    // ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}
    return this.firebird.query<Manutencao>(
      host,
      code,
      `SELECT * FROM MANUTENCAO_M `,
      FirebirdManutencaoMapper.toDomain,
    );
  }

  // async create(
  //   host: string,
  //   code: string,
  //   abastecimentoCicloTalhaoSafra: AbastecimentoCicloTalhaoSafra,
  // ) {
  //   const {
  //     idAbastecimentoCiclo,
  //     idTalhaoSafra,
  //     proporcao,
  //     totalHectares,
  //     valor,
  //     valorCustoAtual,
  //   } = abastecimentoCicloTalhaoSafra;

  //   return (
  //     await this.firebird.query<CreatedAbastecimentoCicloTalhaoSafra>(
  //       host,
  //       code,
  //       `INSERT INTO ABASTECIMENTO_CICLO_TS (ID, ID_ABASTECIMENTO_CICLO, ID_TALHAO_SAFRA, PROPORCAO, TOTAL_HECTARES, VALOR, VALOR_CUSTO_ATUAL) VALUES (GEN_ID(GEN_ABASTECIMENTO_CICLO_TS, 1), ${idAbastecimentoCiclo}, ${idTalhaoSafra}, ${proporcao}, ${totalHectares}, ${valor}, ${valorCustoAtual}) RETURNING ID`,
  //       FirebirdAbastecimentosCiclosTalhoesSafrasMapper.toCreatedDomain,
  //     )
  //   )[0];
  // }
}

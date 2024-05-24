import { FirebirdService } from '../firebird.service';
import { Injectable } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasRepository } from 'src/modules/abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { AbastecimentoCicloTalhaoSafra } from 'src/modules/abastecimentos-ciclos-talhoes-safras/entities/abastecimento-ciclo-talhao-safra.entity';
import { FirebirdAbastecimentosCiclosTalhoesSafrasMapper } from '../mappers/firebird-abastecimentos-ciclos-talhoes-safras.mapper';
import { format } from 'date-fns';

@Injectable()
export class FirebirdAbastecimentosCiclosTalhoesSafrasRepository
  implements AbastecimentosCiclosTalhoesSafrasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<AbastecimentoCicloTalhaoSafra>(
      host,
      code,
      `SELECT * FROM ABASTECIMENTO_CICLO_TS ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdAbastecimentosCiclosTalhoesSafrasMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    abastecimentoCicloTalhaoSafra: AbastecimentoCicloTalhaoSafra,
  ) {
    const {
      idAbastecimentoCiclo,
      idTalhaoSafra,
      proporcao,
      totalHectares,
      valor,
      valorCustoAtual,
    } = abastecimentoCicloTalhaoSafra;

    await this.firebird.query(
      host,
      code,
      `INSERT INTO ABASTECIMENTO_CICLO_TS (ID, ID_ABASTECIMENTO_CICLO, ID_TALHAO_SAFRA, PROPORCAO, TOTAL_HECTARES, VALOR, VALOR_CUSTO_ATUAL) VALUES (GEN_ID(GEN_ABASTECIMENTO_CICLO_TS, 1), ${idAbastecimentoCiclo}, ${idTalhaoSafra}, ${proporcao}, ${totalHectares}, ${valor}, ${valorCustoAtual})`,
    );
  }
}

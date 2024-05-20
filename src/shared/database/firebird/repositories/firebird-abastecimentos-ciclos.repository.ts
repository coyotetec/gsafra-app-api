import { AbastecimentosCiclosRepository } from 'src/modules/abastecimentos-ciclos/abastecimentos-ciclos.repository';
import { FirebirdService } from '../firebird.service';
import { AbastecimentoCiclo } from 'src/modules/abastecimentos-ciclos/entities/abastecimento-ciclo.entity';
import { FirebirdAbastecimentosCiclosMapper } from '../mappers/firebird-abastecimentos-ciclos.mapper';
import { Injectable } from '@nestjs/common';
import { CreatedAbastecimentoCiclo } from 'src/modules/abastecimentos-ciclos/entities/created-abasteciment-ciclo.entity';
import { format } from 'date-fns';

@Injectable()
export class FirebirdAbastecimentosCiclosRepository
  implements AbastecimentosCiclosRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<AbastecimentoCiclo>(
      host,
      code,
      `SELECT * FROM ABASTECIMENTO_CICLO ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdAbastecimentosCiclosMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    abastecimentoCiclo: AbastecimentoCiclo,
  ) {
    const {
      idAbastecimento,
      idCicloProducao,
      proporcao,
      qtdeTalhoes,
      todosTalhoes,
      totalHectares,
      valor,
      valorCustoAtual,
    } = abastecimentoCiclo;

    return (
      await this.firebird.query<CreatedAbastecimentoCiclo>(
        host,
        code,
        `INSERT INTO ABASTECIMENTO_CICLO (ID, ID_ABASTECIMENTO, ID_CICLO_PRODUCAO, PROPORCAO, QTDE_TALHOES, TODOS_TALHOES, TOTAL_HECTARES, VALOR, VALOR_CUSTO_ATUAL) VALUES (GEN_ID(GEN_ABASTECIMENTO_CICLO, 1), ${idAbastecimento}, ${idCicloProducao}, ${proporcao}, ${qtdeTalhoes}, ${todosTalhoes}, ${totalHectares}, ${valor}, ${valorCustoAtual}) RETURNING ID`,
        FirebirdAbastecimentosCiclosMapper.toCreatedDomain,
      )
    )[0];
  }
}

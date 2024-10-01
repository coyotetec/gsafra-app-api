import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { FirebirdAtividadesAgricolasMaquinasMapper } from '../mappers/firebird-atividades-agricolas-maquinas.mapper';
import { AtividadeAgricolaMaquina } from 'src/modules/atividades-agricolas-maquinas/entities/atividade-agricola-maquina.entity';
import { AtividadesAgricolasMaquinasRepository } from 'src/modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.repository';
import { format } from 'date-fns';

@Injectable()
export class FirebirdAtividadesAgricolasMaquinasRepository
  implements AtividadesAgricolasMaquinasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<AtividadeAgricolaMaquina>(
      host,
      code,
      `SELECT * FROM AGRI_ATV_MAQUINA ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
      FirebirdAtividadesAgricolasMaquinasMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    atividadeAgricolaMaquina: AtividadeAgricolaMaquina,
  ) {
    const { idAgriAtv, idPatrimonio, hrInicial, hrFinal, horas, operador, preparadorCalda } =
      atividadeAgricolaMaquina;

    return (
      await this.firebird.query(
        host,
        code,
        `INSERT INTO AGRI_ATV_MAQUINA (ID, ID_AGRI_ATV, ID_PATRIMONIO, HR_INICIAL, HR_FINAL, HORAS, OPERADOR, PREPARADOR_CALDA) VALUES (GEN_ID(GEN_AGRI_ATV_MAQUINA, 1), ${idAgriAtv}, ${idPatrimonio}, ${hrInicial || null}, ${hrFinal || null}, ${horas}, '${operador}', '${preparadorCalda}') RETURNING ID`,
        FirebirdAtividadesAgricolasMaquinasMapper.toCreateDomain,
      )
    )[0];
  }
}

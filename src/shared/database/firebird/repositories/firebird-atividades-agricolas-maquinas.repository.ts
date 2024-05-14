import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird.service';
import { FirebirdAtividadesAgricolasMaquinasMapper } from '../mappers/firebird-atividades-agricolas-maquinas.mapper';
import { AtividadeAgricolaMaquina } from 'src/modules/atividades-agricolas-maquinas/entities/atividade-agricola-maquina.entity';
import { AtividadesAgricolasMaquinasRepository } from 'src/modules/atividades-agricolas-maquinas/atividades-agricolas-maquinas.repository';

@Injectable()
export class FirebirdAtividadesAgricolasMaquinasRepository
  implements AtividadesAgricolasMaquinasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AtividadeAgricolaMaquina>(
      host,
      code,
      'SELECT * FROM agri_atv_maquina',
      FirebirdAtividadesAgricolasMaquinasMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    atividadeAgricolaMaquina: AtividadeAgricolaMaquina,
  ) {
    const { idAgriAtv, idPatrimonio, hrInicial, hrFinal, horas } =
      atividadeAgricolaMaquina;

    await this.firebird.query(
      host,
      code,
      `INSERT INTO AGRI_ATV_MAQUINA (ID, ID_AGRI_ATV, ID_PATRIMONIO, HR_INICIAL, HR_FINAL, HORAS) VALUES (GEN_ID(GEN_AGRI_ATV_MAQUINA, 1), ${idAgriAtv}, ${idPatrimonio}, ${hrInicial || null}, ${hrFinal || null}, ${horas})`,
    );
  }
}

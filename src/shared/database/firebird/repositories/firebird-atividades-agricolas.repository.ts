import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasRepository } from 'src/modules/atividades-agricolas/atividades-agricolas.repository';
import { FirebirdService } from '../firebird.service';
import { AtividadeAgricola } from 'src/modules/atividades-agricolas/entities/atividade-agricola.entity';
import { FirebirdAtividadesAgricolasMapper } from '../mappers/firebird-atividades-agricolas.mapper';
import { CreatedAtividadeAgricola } from 'src/modules/atividades-agricolas/entities/created-atividade-agricola.entity';
import { format } from 'date-fns';

@Injectable()
export class FirebirdAtividadesAgricolasRepository
  implements AtividadesAgricolasRepository
{
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string) {
    return this.firebird.query<AtividadeAgricola>(
      host,
      code,
      'SELECT * FROM agri_atv',
      FirebirdAtividadesAgricolasMapper.toDomain,
    );
  }

  async create(
    host: string,
    code: string,
    atividadeAgricola: AtividadeAgricola,
  ) {
    const {
      idAgriAplicacaoFase,
      idAgriFase,
      idAgriTipoAplicacao,
      idCicloProducao,
      idDispositivo,
      idEstacaoFenologico,
      idFichaAplicacaoBomba,
      idPlanAtv,
      idTipoAtividade,
      idUsuario,
      dataInicio,
      dataTermino,
      descricao,
      dispositivo,
      dispositivoInformacoes,
      obs,
      situacao,
      statusProcessamento,
      totalArea,
      totalAreaTrabalhada,
    } = atividadeAgricola;

    return (
      await this.firebird.query<CreatedAtividadeAgricola>(
        host,
        code,
        `INSERT INTO AGRI_ATV (ID, ID_AGRI_APLICACAO_FASE, ID_AGRI_FASE, ID_AGRI_TIPO_APLICACAO, ID_CICLO_PRODUCAO, ID_DISPOSITIVO, ID_ESTACAO_FENOLOGICO, ID_FICHA_APLICACAO_BOMBA, ID_PLAN_ATV, ID_TIPO_ATIVIDADE, ID_USUARIO, DATA_INICIO, DATA_TERMINO, DESCRICAO, DISPOSITIVO, DISPOSITIVO_INFORMACOES, OBS, SITUACAO, STATUS_PROCESSAMENTO, TOTAL_AREA, TOTAL_AREA_TRABALHADA) VALUES (GEN_ID(GEN_AGRI_ATV, 1), ${idAgriAplicacaoFase || null}, ${idAgriFase}, ${idAgriTipoAplicacao || null}, ${idCicloProducao}, ${idDispositivo || null}, ${idEstacaoFenologico || null}, ${idFichaAplicacaoBomba || null}, ${idPlanAtv || null}, ${idTipoAtividade || null}, ${idUsuario || null}, ${dataInicio ? `'${format(dataInicio, 'yyyy-MM-dd')}'` : null}, ${dataTermino ? `'${format(dataTermino, 'yyyy-MM-dd')}'` : null}, ${descricao ? `'${descricao}'` : null}, ${dispositivo ? `'${dispositivo}'` : null}, ${dispositivoInformacoes ? `'${dispositivoInformacoes}'` : null}, ${obs ? `'${obs}'` : null}, ${situacao}, ${statusProcessamento || null}, ${totalArea}, ${totalAreaTrabalhada}) RETURNING ID`,
        FirebirdAtividadesAgricolasMapper.toCreateDomain,
      )
    )[0];
  }
}

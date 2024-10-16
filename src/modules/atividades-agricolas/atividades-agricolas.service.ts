import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasRepository } from './atividades-agricolas.repository';
import { CreateAtividadeAgricolaDto } from './dto/create-atividade-agricola.dto';
import {
  AtividadeAgricola,
  StatusProcessamentoType,
} from './entities/atividade-agricola.entity';
import { parse } from 'date-fns';
import { AtividadesAgricolasInsumosService } from '../atividades-agricolas-insumos/atividades-agricolas-insumos.service';
import { AtividadesAgricolasMaquinasService } from '../atividades-agricolas-maquinas/atividades-agricolas-maquinas.service';
import { AtividadesAgricolasTalhoesSafrasService } from '../atividades-agricolas-talhoes-safras/atividades-agricolas-talhoes-safras.service';

@Injectable()
export class AtividadesAgricolasService {
  constructor(
    private atividadesAgricolasRepository: AtividadesAgricolasRepository,
    private atividadesAgricolasInsumosService: AtividadesAgricolasInsumosService,
    private atividadesAgricolasMaquinasService: AtividadesAgricolasMaquinasService,
    private atividadesAgricolasTalhoesSafrasService: AtividadesAgricolasTalhoesSafrasService,
  ) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.atividadesAgricolasRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
  }

  async create(
    host: string,
    code: string,
    payload: CreateAtividadeAgricolaDto,
  ) {
    const atividadeAgricola = await this.atividadesAgricolasRepository.create(
      host,
      code,
      new AtividadeAgricola({
        idAgriAplicacaoFase: payload.idAgriAplicacaoFase,
        idAgriFase: payload.idAgriFase,
        idAgriTipoAplicacao: payload.idAgriTipoAplicacao,
        idCicloProducao: payload.idCicloProducao,
        idEstacaoFenologico: payload.idEstacaoFenologico,
        idPlanAtv: payload.idPlanAtv,
        idTipoAtividade: payload.idTipoAtividade,
        idUsuario: payload.idUsuario,
        dataInicio: parse(payload.dataInicio, 'dd/MM/yyyy', new Date()),
        dataTermino: parse(payload.dataTermino, 'dd/MM/yyyy', new Date()),
        descricao: payload.descricao,
        obs: payload.obs,
        situacao: payload.situacao,
        totalArea: payload.totalArea,
        statusProcessamento: StatusProcessamentoType.PENDENTE,
        totalAreaTrabalhada: payload.totalAreaTrabalhada,
      }),
    );

    const createdAtividadeAgricolaInsumos = [];

    for (const insumo of payload.insumos) {
      const atividadeAgricolaInsumo =
        await this.atividadesAgricolasInsumosService.create(host, code, {
          atividadeAgricolaId: atividadeAgricola.id,
          insumo,
        });

      createdAtividadeAgricolaInsumos.push({
        id: insumo.idMobile,
        idOrigem: atividadeAgricolaInsumo.id,
      });
    }

    const createdAtividadeAgricolaMaquinas = [];

    for (const maquina of payload.maquinas) {
      const atividadeAgricolaMaquina =
        await this.atividadesAgricolasMaquinasService.create(host, code, {
          atividadeAgricolaId: atividadeAgricola.id,
          maquina,
        });

      createdAtividadeAgricolaMaquinas.push({
        id: maquina.idMobile,
        idOrigem: atividadeAgricolaMaquina.id,
      });
    }

    const createdAtividadeAgricolaTalhoesSafras = [];

    for (const talhaoSafra of payload.talhoesSafras) {
      const atividadeAgricolaTalhaoSafra =
        await this.atividadesAgricolasTalhoesSafrasService.create(host, code, {
          atividadeAgricolaId: atividadeAgricola.id,
          talhaoSafra,
        });

      createdAtividadeAgricolaTalhoesSafras.push({
        id: talhaoSafra.idMobile,
        idOrigem: atividadeAgricolaTalhaoSafra.id,
      });
    }

    return {
      id: payload.idMobile,
      idOrigem: atividadeAgricola.id,
      insumos: createdAtividadeAgricolaInsumos,
      maquinas: createdAtividadeAgricolaMaquinas,
      talhoesSafras: createdAtividadeAgricolaTalhoesSafras,
    };
  }
}

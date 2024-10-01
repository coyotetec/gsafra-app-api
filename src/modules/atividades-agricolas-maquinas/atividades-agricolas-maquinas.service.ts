import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasMaquinasRepository } from './atividades-agricolas-maquinas.repository';
import { CreateAtividadeAgricolaMaquinaDto } from './dto/create-atividade-agricola-maquina.dto';
import { AtividadeAgricolaMaquina } from './entities/atividade-agricola-maquina.entity';

@Injectable()
export class AtividadesAgricolasMaquinasService {
  constructor(
    private atividadesAgricolasMaquinasRepository: AtividadesAgricolasMaquinasRepository,
  ) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.atividadesAgricolasMaquinasRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
  }

  async create(
    host: string,
    code: string,
    createAtividadeAgricolaMaquinaDto: CreateAtividadeAgricolaMaquinaDto,
  ) {
    const { atividadeAgricolaId, maquina } = createAtividadeAgricolaMaquinaDto;

    return await this.atividadesAgricolasMaquinasRepository.create(
      host,
      code,
      new AtividadeAgricolaMaquina({
        idAgriAtv: atividadeAgricolaId,
        idPatrimonio: maquina.idPatrimonio,
        hrInicial: maquina.horimetroInicial,
        hrFinal: maquina.horimetroFinal,
        horas: maquina.horasTrabalhadas,
        operador: maquina.operador,
        preparadorCalda: maquina.preparadorCalda
      }),
    );
  }
}

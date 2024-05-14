import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasTalhoesSafrasRepository } from './atividades-agricolas-talhoes-safras.repository';
import { CreateAtividadeAgricolaTalhaoSafraDto } from './dto/create-atividade-agricola-talhao-safra.dto';
import { AtividadeAgricolaTalhaoSafra } from './entities/atividade-agricola-talhao-safra.entity';

@Injectable()
export class AtividadesAgricolasTalhoesSafrasService {
  constructor(
    private atividadesAgricolasTalhoesSafrasRepository: AtividadesAgricolasTalhoesSafrasRepository,
  ) {}

  findAll(host: string, code: string) {
    return this.atividadesAgricolasTalhoesSafrasRepository.findMany(host, code);
  }

  async create(
    host: string,
    code: string,
    createAtividadeAgricolaTalhaoSafraDto: CreateAtividadeAgricolaTalhaoSafraDto,
  ) {
    const { atividadeAgricolaId, talhaoSafra } =
      createAtividadeAgricolaTalhaoSafraDto;

    await this.atividadesAgricolasTalhoesSafrasRepository.create(
      host,
      code,
      new AtividadeAgricolaTalhaoSafra({
        idAgriAtv: atividadeAgricolaId,
        idTalhaoSafra: talhaoSafra.idTalhaoSafra,
        hectares: talhaoSafra.hectares,
        proporcao: talhaoSafra.proporcao,
        hectaresPlanejamento: talhaoSafra.hectaresPlanejamento,
        proporcaoPlanejamento: talhaoSafra.proporcaoPlanejamento,
      }),
    );
  }
}

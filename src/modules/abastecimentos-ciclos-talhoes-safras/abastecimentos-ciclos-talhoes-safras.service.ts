import { Injectable } from '@nestjs/common';
import { AbastecimentosCiclosTalhoesSafrasRepository } from './abastecimentos-ciclos-talhoes-safras.repository';
import { CreateAbastecimentoCicloTalhaoDto } from './dto/create-abastecimento-ciclo-talhao.dto';
import { calculateProportion } from 'src/shared/utils/calculateProportion';
import { fixedNumber } from 'src/shared/utils/fixedNumber';
import { AbastecimentoCicloTalhaoSafra } from './entities/abastecimento-ciclo-talhao-safra.entity';

@Injectable()
export class AbastecimentosCiclosTalhoesSafrasService {
  constructor(
    private abastecimentosCiclosTalhoesSafrasRepository: AbastecimentosCiclosTalhoesSafrasRepository,
  ) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.abastecimentosCiclosTalhoesSafrasRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
  }

  async create(
    host: string,
    code: string,
    payload: CreateAbastecimentoCicloTalhaoDto,
  ) {
    let proporcaoTalhaoSafraTotal = 0;
    const createdAbastecimentoCicloTalhoesSafras = [];

    for (let j = 0; j < payload.talhoesSafras.length; j++) {
      const talhaoSafra = payload.talhoesSafras[j];
      let proporcaoTalhaoSafra = calculateProportion(
        talhaoSafra.hectares,
        payload.abastecimentoCicloSafraArea,
      );

      proporcaoTalhaoSafraTotal = fixedNumber(
        proporcaoTalhaoSafraTotal + proporcaoTalhaoSafra,
        2,
      );

      if (j === payload.talhoesSafras.length - 1) {
        proporcaoTalhaoSafra = fixedNumber(
          proporcaoTalhaoSafra + (100 - proporcaoTalhaoSafraTotal),
          2,
        );
      }

      const valorTalhaoSafra = fixedNumber(
        payload.abastecimentoCicloValorSafra * (proporcaoTalhaoSafra / 100),
        2,
      );
      const valorAtualTalhaoSafra = fixedNumber(
        payload.abastecimentoCicloValorAtualSafra *
          (proporcaoTalhaoSafra / 100),
        2,
      );

      const abastecimentoCicloTalhaoSafra =
        await this.abastecimentosCiclosTalhoesSafrasRepository.create(
          host,
          code,
          new AbastecimentoCicloTalhaoSafra({
            idAbastecimentoCiclo: payload.abastecimentoCicloId,
            idTalhaoSafra: talhaoSafra.id,
            proporcao: proporcaoTalhaoSafra,
            totalHectares: talhaoSafra.hectares,
            valor: valorTalhaoSafra,
            valorCustoAtual: valorAtualTalhaoSafra,
          }),
        );

      createdAbastecimentoCicloTalhoesSafras.push({
        id: talhaoSafra.idMobile,
        idOrigem: abastecimentoCicloTalhaoSafra.id,
      });
    }

    return createdAbastecimentoCicloTalhoesSafras;
  }
}

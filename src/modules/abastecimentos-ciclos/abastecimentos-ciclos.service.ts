import { Injectable } from '@nestjs/common';
import { AbastecimentosCiclosRepository } from './abastecimentos-ciclos.repository';
import { CreateAbastecimentoCicloDto } from './dto/create-abastecimento-ciclo.dto';
import { calculateProportion } from 'src/shared/utils/calculateProportion';
import { fixedNumber } from 'src/shared/utils/fixedNumber';
import { AbastecimentoCiclo } from './entities/abastecimento-ciclo.entity';
import { AbastecimentosCiclosTalhoesSafrasRepository } from '../abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.repository';
import { AbastecimentosCiclosTalhoesSafrasService } from '../abastecimentos-ciclos-talhoes-safras/abastecimentos-ciclos-talhoes-safras.service';

@Injectable()
export class AbastecimentosCiclosService {
  constructor(
    private abastecimentosCiclosRepository: AbastecimentosCiclosRepository,
    private abastecimentosCiclosTalhoesSafrasRepository: AbastecimentosCiclosTalhoesSafrasRepository,
    private abastecimentosCiclosTalhoesSafrasService: AbastecimentosCiclosTalhoesSafrasService,
  ) {}

  findAll(host: string, code: string) {
    return this.abastecimentosCiclosRepository.findMany(host, code);
  }

  async create(
    host: string,
    code: string,
    payload: CreateAbastecimentoCicloDto,
  ) {
    let proporcaoSafraTotal = 0;

    for (let i = 0; i < payload.safras.length; i++) {
      const safra = payload.safras[i];
      const safraArea = safra.talhoesSafras.reduce(
        (accTalhaoSafra, talhaoSafra) => accTalhaoSafra + talhaoSafra.hectares,
        0,
      );
      let proporcaoSafra = calculateProportion(
        safraArea,
        payload.abastecimentoTotalArea,
      );

      proporcaoSafraTotal = fixedNumber(
        proporcaoSafraTotal + proporcaoSafra,
        2,
      );

      if (i === payload.safras.length - 1 && proporcaoSafraTotal < 100) {
        proporcaoSafra = fixedNumber(
          proporcaoSafra + (100 - proporcaoSafraTotal),
          2,
        );
      }

      const valorSafra = fixedNumber(
        payload.abastecimentoTotalMedio * (proporcaoSafra / 100),
        2,
      );
      const valorAtualSafra = fixedNumber(
        payload.abastecimentoTotalAtual * (proporcaoSafra / 100),
        2,
      );

      const abastecimentoCiclo =
        await this.abastecimentosCiclosRepository.create(
          host,
          code,
          new AbastecimentoCiclo({
            idAbastecimento: payload.abastecimentoId,
            idCicloProducao: safra.id,
            proporcao: proporcaoSafra,
            qtdeTalhoes: safra.talhoesSafras.length,
            todosTalhoes: safra.todosTalhoes,
            totalHectares: safraArea,
            valor: valorSafra,
            valorCustoAtual: valorAtualSafra,
          }),
        );

      this.abastecimentosCiclosTalhoesSafrasService.create(host, code, {
        abastecimentoCicloId: abastecimentoCiclo.id,
        abastecimentoCicloSafraArea: safraArea,
        abastecimentoCicloValorSafra: valorSafra,
        abastecimentoCicloValorAtualSafra: valorAtualSafra,
        talhoesSafras: safra.talhoesSafras,
      });
    }
  }
}

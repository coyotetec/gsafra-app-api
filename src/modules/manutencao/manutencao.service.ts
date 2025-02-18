import { Injectable } from '@nestjs/common';
import { ManutencaoRepository } from './manutencao.repository';

@Injectable()
export class ManutencaoService {
  constructor(
    private manutencaoRepository: ManutencaoRepository,
  ) { }

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.manutencaoRepository.findMany(host, code, lastUpdatedAt);
  }

  // async create(host: string, code: string, payload: CreateAbastecimentoDto) {
  //   const produtoAlmoxarifado =
  //     await this.produtosAlmoxarifadoRepository.findBydId(
  //       host,
  //       code,
  //       payload.idProdutoAlmoxarifado,
  //     );

  //   if (!produtoAlmoxarifado) {
  //     throw new BadRequestException(
  //       'Por favor insira um produto almoxarifado válido',
  //     );
  //   }

  //   const totalAtual = fixedNumber(
  //     produtoAlmoxarifado.custoAtual * payload.quantidade,
  //     2,
  //   );
  //   const totalMedio = fixedNumber(
  //     produtoAlmoxarifado.custoMedio * payload.quantidade,
  //     2,
  //   );

  //   const abastecimento = await this.abastecimentosRepository.create(
  //     host,
  //     code,
  //     new Abastecimento({
  //       idAlmoxarifado: payload.idAlmoxarifado,
  //       idPatrimonio: payload.idPatrimonio,
  //       idProdutoAlmoxarifado: payload.idProdutoAlmoxarifado,
  //       idUsuario: payload.idUsuario,
  //       custoAtual: produtoAlmoxarifado.custoAtual,
  //       custoMedio: produtoAlmoxarifado.custoMedio,
  //       data: parse(payload.data, 'dd/MM/yyyy', new Date()),
  //       estoqueMovimentado: EstoqueMovimentadoType.FALSO,
  //       horimetro: payload.horimetro,
  //       numeroRequisicao: payload.numeroRequisicao,
  //       quantidade: payload.quantidade,
  //       statusProcessamento: StatusProcessamentoType.PENDENTE,
  //       totalAtual,
  //       totalMedio,
  //     }),
  //   );

  //   const totalArea = payload.safras.reduce(
  //     (acc, safra) =>
  //       safra.talhoesSafras.reduce(
  //         (accTalhaoSafra, talhaoSafra) =>
  //           accTalhaoSafra + talhaoSafra.hectares,
  //         0,
  //       ),
  //     0,
  //   );

  //   const createdAbastecimentoCiclosTalhoesSafras =
  //     await this.abastecimentosCiclosService.create(host, code, {
  //       abastecimentoId: abastecimento.id,
  //       abastecimentoTotalArea: totalArea,
  //       abastecimentoTotalAtual: totalAtual,
  //       abastecimentoTotalMedio: totalMedio,
  //       safras: payload.safras,
  //     });

  //   return {
  //     id: payload.idMobile,
  //     idOrigem: abastecimento.id,
  //     safras: createdAbastecimentoCiclosTalhoesSafras,
  //   };
  // }
}

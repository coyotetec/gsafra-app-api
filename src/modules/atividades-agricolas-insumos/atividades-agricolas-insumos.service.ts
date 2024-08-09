import { Injectable } from '@nestjs/common';
import { AtividadesAgricolasInsumosRepository } from './atividades-agricolas-insumos.repository';
import { CreateAtividadeAgricolaInsumoDto } from './dto/create-atividade-agricola-insumo.dto';
import {
  AtividadeAgricolaInsumo,
  EstoqueMovimentadoType,
} from './entities/atividade-agricola-insumo.entity';
import { ProdutosAlmoxarifadoRepository } from '../produtos-almoxarifado/produtos-almoxarifado.repository';

@Injectable()
export class AtividadesAgricolasInsumosService {
  constructor(
    private atividadesAgricolasInsumosRepository: AtividadesAgricolasInsumosRepository,
    private produtosAlmoxarifadosRepository: ProdutosAlmoxarifadoRepository,
  ) {}

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.atividadesAgricolasInsumosRepository.findMany(
      host,
      code,
      lastUpdatedAt,
    );
  }

  async create(
    host: string,
    code: string,
    createAtividadeAgricolaInsumoDto: CreateAtividadeAgricolaInsumoDto,
  ) {
    const { atividadeAgricolaId, insumo } = createAtividadeAgricolaInsumoDto;

    const produtoAlmoxarifado =
      await this.produtosAlmoxarifadosRepository.findBydId(
        host,
        code,
        insumo.idProdutoAlmoxarifado,
      );

    return await this.atividadesAgricolasInsumosRepository.create(
      host,
      code,
      new AtividadeAgricolaInsumo({
        idAgriAtv: atividadeAgricolaId,
        idAlmoxarifado: insumo.idAlmoxarifado,
        idPlanAtvInsumo: insumo.idPlanAtvInsumo,
        idProdutoAlmoxarifado: insumo.idProdutoAlmoxarifado,
        idUnidade: insumo.idUnidade,
        custoAtual: produtoAlmoxarifado.custoAtual * insumo.quantidade,
        custoMedio: produtoAlmoxarifado.custoMedio * insumo.quantidade,
        estoqueMovimentado: EstoqueMovimentadoType.FALSO,
        qtde: insumo.quantidade,
      }),
    );
  }
}

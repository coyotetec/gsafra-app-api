import { Estoque } from 'src/modules/estoque/entities/estoque.entity';

interface FirebirdManutencao {
  id: number;
  estoqueAtual: number;
  precoVenda: number;
  nome: string;
  custoAtual: number
  custoMedio: number
  unidade: string
  sigla: string
}

export class FirebirdEstoqueMapper {
  static toDomain(
    raw: FirebirdManutencao,
  ): Estoque {
    console.log(raw)
    return new Estoque({
      id: raw.id,
      estoqueAtual: raw.estoqueAtual,
      precoVenda: raw.precoVenda,
      nome: raw.nome,
      custoAtual: raw.custoAtual,
      custoMedio: raw.custoMedio,
      unidade: raw.unidade,
      sigla: raw.sigla,
    });
  }
}

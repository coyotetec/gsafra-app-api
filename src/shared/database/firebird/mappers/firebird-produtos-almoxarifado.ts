import { ProdutoAlmoxarifado } from 'src/modules/produtos-almoxarifado/entities/produto-almoxarifado.entity';

interface FirebirdProdutoAlmoxarifado {
  ID: number;
  ID_MARCA: number;
  ID_UNIDADE: number;
  ID_GRUPO: number;
  ID_SUBGRUPO: number;
  TIPO: number;
  NOME: string;
  REF_FABRICANTE: string;
  CUSTO_MEDIO: number;
  CUSTO_ATUAL: number;
  ESTOQUE_MINIMO: number;
  DATA_CADASTRO: Date;
  STATUS: number;
  DOSE_HA: number;
  PLANO_CONTA_DEFINIDO: number;
  ID_PLANO_CONTA: number;
  INTERVALO_REENTRADA: number;
  PERIODO_CARENCIA: number;
  CLASSE_TOXICOLOGICA: string;
  CODIGO_PARALELO: string;
  PRECO_VENDA: number;
  MARGEM: number;
}

export class FireBirdProdutosAlmoxarifadoMapper {
  static toDomain(raw: FirebirdProdutoAlmoxarifado): ProdutoAlmoxarifado {
    return new ProdutoAlmoxarifado({
      id: raw.ID,
      idMarca: raw.ID_MARCA,
      idUnidade: raw.ID_UNIDADE,
      idGrupo: raw.ID_GRUPO,
      idSubgrupo: raw.ID_SUBGRUPO,
      tipo: raw.TIPO,
      nome: raw.NOME,
      refFabricante: raw.REF_FABRICANTE,
      custoMedio: raw.CUSTO_MEDIO,
      custoAtual: raw.CUSTO_ATUAL,
      estoqueMinimo: raw.ESTOQUE_MINIMO,
      dataCadastro: raw.DATA_CADASTRO,
      status: raw.STATUS,
      doseHa: raw.DOSE_HA,
      planoContaDefinido: raw.PLANO_CONTA_DEFINIDO,
      idPlanoConta: raw.ID_PLANO_CONTA,
      intervaloReentrada: raw.INTERVALO_REENTRADA,
      periodoCarencia: raw.PERIODO_CARENCIA,
      classeToxicologica: raw.CLASSE_TOXICOLOGICA,
      codigoParalelo: raw.CODIGO_PARALELO,
      precoVenda: raw.PRECO_VENDA,
      margem: raw.MARGEM,
    });
  }
}

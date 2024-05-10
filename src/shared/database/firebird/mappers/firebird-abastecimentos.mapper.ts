import { Abastecimento } from 'src/modules/abastecimentos/entities/abastecimento.entity';
import { CreatedAbastecimento } from 'src/modules/abastecimentos/entities/created-abastecimento.entity';

interface FirebirdAbastecimento {
  ID: number;
  ID_AGRI_ATV_MAQUINA: number;
  ID_ALMOXARIFADO: number;
  ID_PATRIMONIO: number;
  ID_PRODUTO_ALMOXARIFADO: number;
  ID_USUARIO: number;
  CUSTO_ATUAL: number;
  CUSTO_MEDIO: number;
  DATA: Date;
  DISPOSITIVO: string;
  DISPOSITIVO_INFORMACOES: string;
  ESTOQUE_MOVIMENTADO: number;
  HORIMETRO: number;
  NUMERO_REQUISICAO: string;
  QUANTIDADE: number;
  STATUS_PROCESSAMENTO: number;
  TOTAL_ATUAL: number;
  TOTAL_MEDIO: number;
}

interface FirebirdCreateAbastecimento {
  ID: number;
}

export class FirebirdAbastecimentosMapper {
  static toDomain(raw: FirebirdAbastecimento): Abastecimento {
    return new Abastecimento({
      id: raw.ID,
      idAgriAtvMaquina: raw.ID_AGRI_ATV_MAQUINA,
      idAlmoxarifado: raw.ID_ALMOXARIFADO,
      idPatrimonio: raw.ID_PATRIMONIO,
      idProdutoAlmoxarifado: raw.ID_PRODUTO_ALMOXARIFADO,
      idUsuario: raw.ID_USUARIO,
      custoAtual: raw.CUSTO_ATUAL,
      custoMedio: raw.CUSTO_MEDIO,
      data: raw.DATA,
      dispositivo: raw.DISPOSITIVO,
      dispositivoInformacoes: raw.DISPOSITIVO_INFORMACOES,
      estoqueMovimentado: raw.ESTOQUE_MOVIMENTADO,
      horimetro: raw.HORIMETRO,
      numeroRequisicao: raw.NUMERO_REQUISICAO,
      quantidade: raw.QUANTIDADE,
      statusProcessamento: raw.STATUS_PROCESSAMENTO,
      totalAtual: raw.TOTAL_ATUAL,
      totalMedio: raw.TOTAL_MEDIO,
    });
  }

  static toCreateDomain(
    raw: FirebirdCreateAbastecimento,
  ): CreatedAbastecimento {
    return new CreatedAbastecimento({
      id: raw.ID,
    });
  }
}

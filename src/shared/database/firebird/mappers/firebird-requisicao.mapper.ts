import { CreatedAbastecimento } from 'src/modules/abastecimentos/entities/created-abastecimento.entity';
import { Requisicao } from 'src/modules/requisicao/entities/requisicao.entity';

interface FirebirdRequisicao {
  ID: number;
  NUMERO_REQUISICAO: number;
  DATA_REQUISICAO: string;
  SOLICITANTE: string;
  ID_USUARIO_INCLUSAO: number;
  DATA_HORA_ATUAL_INCLUSAO: string;
  DATA_HORA_ATUAL_EDICAO: string;
  ID_USUARIO_EDICAO: number;
  OBSERVACOES: string;
  SITUACAO: number;
  DESCRICAO: string;
  TIPO: number;
}
interface FirebirdCreated {
  ID: number;
}
export class FirebirdRequisicaoMapper {
  static toDomain(raw: FirebirdRequisicao): Requisicao {
    return new Requisicao({
      id: raw.ID,
      numeroRequisicao: raw.NUMERO_REQUISICAO,
      dataRequisicao: raw.DATA_REQUISICAO,
      solicitante: raw.SOLICITANTE,
      idUsuarioInclusao: raw.ID_USUARIO_INCLUSAO,
      dataHoraAtualInclusao: raw.DATA_HORA_ATUAL_INCLUSAO,
      dataHoraAtualEdicao: raw.DATA_HORA_ATUAL_EDICAO,
      idUsuarioEdicao: raw.ID_USUARIO_EDICAO,
      observacao: raw.OBSERVACOES,
      situacao: raw.SITUACAO,
      descricao: raw.DESCRICAO,
      tipo: raw.TIPO,
    });
  }

  static toCreatedDomain(raw: FirebirdCreated): CreatedAbastecimento {
    return new CreatedAbastecimento({
      id: raw.ID,
    });
  }
}

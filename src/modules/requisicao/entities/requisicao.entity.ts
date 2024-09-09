import { RequisicaoProduto } from 'src/modules/requisicao-produto/entities/requisicao.entity';

export class Requisicao {
  id?: number;
  numeroRequisicao: number;
  dataRequisicao: string;
  solicitante: string;
  idUsuarioInclusao: number;
  dataHoraAtualInclusao: string;
  dataHoraAtualEdicao: string;
  idUsuarioEdicao: number;
  observacao: string;
  situacao: number;
  descricao: string;
  tipo: number;
  requisicaoProduto?: RequisicaoProduto[];

  constructor(props: Requisicao) {
    this.id = props.id;
    this.numeroRequisicao = props.numeroRequisicao;
    this.dataRequisicao = props.dataRequisicao;
    this.solicitante = props.solicitante;
    this.idUsuarioInclusao = props.idUsuarioInclusao;
    this.dataHoraAtualInclusao = props.dataHoraAtualInclusao;
    this.dataHoraAtualEdicao = props.dataHoraAtualEdicao;
    this.idUsuarioEdicao = props.idUsuarioEdicao;
    this.observacao = props.observacao;
    this.situacao = props.situacao;
    this.descricao = props.descricao;
    this.tipo = props.tipo;
    this.requisicaoProduto = props.requisicaoProduto;
  }
}

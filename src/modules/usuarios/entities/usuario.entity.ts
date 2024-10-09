enum StatusType {
  INATIVO,
  ATIVO,
}

export class Usuario {
  id: number;
  idPapel: number;
  idFuncionario: number;
  idPessoa: number;
  login: string;
  senha: string;
  loginApp: string;
  senhaApp: string;
  senhaApp2: string;
  whatsappNotificacao: string;
  status: StatusType;
  dataCadastro: Date;
  dataAtualizacao?: Date;
  idDashboardSecao: number;

  constructor(props: Usuario) {
    this.id = props.id;
    this.idPapel = props.idPapel;
    this.idDashboardSecao = props.idDashboardSecao;
    this.idFuncionario = props.idFuncionario;
    this.idPessoa = props.idPessoa;
    this.login = props.login;
    this.senha = props.senha;
    this.loginApp = props.loginApp;
    this.senhaApp = props.senhaApp;
    this.senhaApp2 = props.senhaApp2;
    this.whatsappNotificacao = props.whatsappNotificacao;
    this.status = props.status;
    this.dataCadastro = props.dataCadastro;
    this.dataAtualizacao = props.dataAtualizacao;
  }
}
export class DashboardSecao {
  id: number;
  categoria: string;
  codigo: string;

  constructor(props: DashboardSecao) {
    this.id = props.id;
    this.categoria = props.categoria;
    this.codigo = props.codigo;
  }
}
export class PapelDashboard {
  id: number;
  idPapel: number;
  idDashboardSecao: number;

  constructor(props: PapelDashboard) {
    this.id = props.id;
    this.idDashboardSecao = props.idDashboardSecao;
    this.idPapel = props.idPapel;
  }
}

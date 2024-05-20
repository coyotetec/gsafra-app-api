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

  constructor(props: Usuario) {
    this.id = props.id;
    this.idPapel = props.idPapel;
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

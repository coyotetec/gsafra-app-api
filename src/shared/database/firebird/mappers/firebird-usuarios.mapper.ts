import {
  DashboardSecao,
  PapelDashboard,
  Usuario,
} from 'src/modules/usuarios/entities/usuario.entity';

interface FirebirdUsuario {
  ID: number;
  ID_PAPEL: number;
  ID_FUNCIONARIO: number;
  ID_PESSOA: number;
  LOGIN: string;
  SENHA: string;
  LOGIN_APP: string;
  SENHA_APP: string;
  SENHA_APP_2: string;
  WHATSAPP_NOTIFICACAO: string;
  STATUS: number;
  ID_DASHBOARD_SECAO: number;
  DATA_CADASTRO: Date;
  DATA_ATUALIZACAO?: Date;
}
interface FirebirdDashboardSecao {
  CATEGORIA: string;
  CODIGO: string;
  ID: number;
}
interface FirebirdPapelDashboard {
  ID_DASHBOARD_SECAO: number;
  ID_PAPEL: number;
  ID: number;
}
export class FirebirdUsuariosMapper {
  static toDomain(raw: FirebirdUsuario): Usuario {
    return new Usuario({
      id: raw.ID,
      idPapel: raw.ID_PAPEL,
      idFuncionario: raw.ID_FUNCIONARIO,
      idPessoa: raw.ID_PESSOA,
      login: raw.LOGIN,
      senha: raw.SENHA,
      loginApp: raw.LOGIN_APP,
      senhaApp: raw.SENHA_APP,
      senhaApp2: raw.SENHA_APP_2,
      whatsappNotificacao: raw.WHATSAPP_NOTIFICACAO,
      status: raw.STATUS,
      dataCadastro: raw.DATA_CADASTRO,
      dataAtualizacao: raw.DATA_ATUALIZACAO,
      idDashboardSecao: raw.ID_DASHBOARD_SECAO,
    });
  }
}
export class FirebirdDashboardSecaoMapper {
  static toDomain(raw: FirebirdDashboardSecao): DashboardSecao {
    return new DashboardSecao({
      id: raw.ID,
      categoria: raw.CATEGORIA,
      codigo: raw.CODIGO,
    });
  }
}
export class FirebirdPapelDashboardMapper {
  static toDomain(raw: FirebirdPapelDashboard): PapelDashboard {
    return new PapelDashboard({
      id: raw.ID,
      idDashboardSecao: raw.ID_DASHBOARD_SECAO,
      idPapel: raw.ID_PAPEL,
    });
  }
}

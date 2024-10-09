import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import {
  DashboardSecao,
  Usuario,
} from 'src/modules/usuarios/entities/usuario.entity';
import { UsuariosRepository } from 'src/modules/usuarios/usuarios.repository';
import { FirebirdService } from '../firebird.service';
import {
  FirebirdDashboardSecaoMapper,
  FirebirdUsuariosMapper,
} from '../mappers/firebird-usuarios.mapper';

@Injectable()
export class FirebirdUsuariosRepository implements UsuariosRepository {
  constructor(private firebird: FirebirdService) {}

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird
      .query<Usuario>(
        host,
        code,
        `
        SELECT * FROM USUARIO     ;
        
        ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}`,
        FirebirdUsuariosMapper.toDomain,
      )
      .then(async (response) => {
        let dataInfo = [];

        for (const dashboardPapel of response) {
          const data = await this.firebird.query<DashboardSecao>(
            host,
            code,
            `
                  SELECT * 
                  FROM PAPEL_DASHBOARD pd 
                  INNER JOIN DASHBOARD_SECAO ds ON pd.ID_DASHBOARD_SECAO = ds.ID
                  WHERE pd.ID_PAPEL = ${Number(dashboardPapel.idPapel)}
              ;
             `,
            FirebirdDashboardSecaoMapper.toDomain,
          );
          dataInfo.push({
            ...dashboardPapel,
            dashboardPermisao: data,
          });
        }
        return dataInfo;
      });
  }
}

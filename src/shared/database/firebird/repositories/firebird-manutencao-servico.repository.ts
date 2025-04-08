import { Injectable } from '@nestjs/common';
import { ManutencaoServico } from 'src/modules/manutencao-servico/entities/manutencao-servico.entity';
import { ManutencaoServicoRepository } from 'src/modules/manutencao-servico/manutencao-servico.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdManutencaoMapperServico } from '../mappers/firebird-manutencao-servico.mapper';

@Injectable()
export class FirebirdManutencaoServicoRepositoryData
  implements ManutencaoServicoRepository {
  constructor(private firebird: FirebirdService) { }

  findMany(host: string, code: string, lastUpdatedAt?: Date) {
    // ${lastUpdatedAt ? `WHERE DATA_ATUALIZACAO >= '${format(lastUpdatedAt, 'yyyy-MM-dd HH:mm:ss')}'` : ''}
    return this.firebird.query<ManutencaoServico>(
      host,
      code,
      `SELECT * FROM MANUTENCAO_SERVICO `,
      FirebirdManutencaoMapperServico.toDomain,
    );
  }
}

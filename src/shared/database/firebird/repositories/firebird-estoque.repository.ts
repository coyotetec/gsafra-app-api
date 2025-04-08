import { Injectable } from '@nestjs/common';
import { Estoque } from 'src/modules/estoque/entities/estoque.entity';
import { EstoqueRepository } from 'src/modules/estoque/estoque.repository';
import { FirebirdService } from '../firebird.service';
import { FirebirdEstoqueMapper } from '../mappers/firebird-estoque.mapper';

@Injectable()
export class FirebirdEstoqueRepositoryData implements EstoqueRepository {
  constructor(private firebird: FirebirdService) { }

  findAll(host: string, code: string, lastUpdatedAt?: Date) {
    return this.firebird.query<Estoque>(
      host,
      code,
      `SELECT 
      e.ID id, 
      e.ESTOQUE_ATUAL estoqueAtual, 
      e.ID_ALMOXARIFADO id_Almoxarifado, 
      al.PRECO_VENDA precoVenda, 
      al.NOME nome, 
      al.CUSTO_ATUAL custoAtual, 
      al.CUSTO_MEDIO custoMedio, 
      u.NOME unidade, 
      u.SIGLA sigla,
      al.ID id_Produto_Almoxarifado,
      u.ID id_Unidade
   FROM ESTOQUE e
   INNER JOIN PRODUTO_ALMOXARIFADO al ON e.ID_PRODUTO_ALMOXARIFADO = al.ID
   INNER JOIN UNIDADE u ON al.ID_UNIDADE = u.ID
   WHERE e.ESTOQUE_ATUAL > 0`,
      FirebirdEstoqueMapper.toDomain,
    );
  }
}

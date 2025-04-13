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
      `
      SELECT 
  e.ID AS id, 
  e.ESTOQUE_ATUAL AS estoqueAtual, 
  e.ID_ALMOXARIFADO AS id_Almoxarifado, 
  al.PRECO_VENDA AS precoVenda, 
  al.NOME AS nome, 
  al.CUSTO_ATUAL AS custoAtual, 
  al.CUSTO_MEDIO AS custoMedio, 
  u.NOME AS unidade, 
  u.SIGLA AS sigla,
  al.ID AS id_Produto_Almoxarifado,
  u.ID AS id_Unidade
FROM ESTOQUE e
INNER JOIN PRODUTO_ALMOXARIFADO al ON e.ID_PRODUTO_ALMOXARIFADO = al.ID
INNER JOIN UNIDADE u ON al.ID_UNIDADE = u.ID
WHERE (al.TIPO = 2 OR al.TIPO = 99)
  AND e.ESTOQUE_ATUAL > 0;
   `,
      FirebirdEstoqueMapper.toDomain,
    );
  }
}

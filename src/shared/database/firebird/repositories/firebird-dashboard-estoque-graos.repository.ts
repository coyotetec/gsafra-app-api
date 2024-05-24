import { Injectable } from '@nestjs/common';
import { DashboardEstoqueGraosRepository } from 'src/modules/dashboard-estoque-graos/dashboard-estoque-graos.repository';
import { DashboardEstoqueGraosEntries } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-entries.entity';
import { DashboardEstoqueGraosOutflow } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-outflow.entity';
import { FirebirdService } from '../firebird.service';
import { FirebirdDashboardEstoqueGraosMapper } from '../mappers/firebird-dashboard-estoque-graos.mapper';
import { format } from 'date-fns';
import {
  DashboardEstoqueGraosFiltersDto,
  FindPreviousBalanceDto,
} from 'src/modules/dashboard-estoque-graos/dto/estoque-graos-args.dto';
import { DashboardEstoqueGraosPreviousBalance } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-graos-previous-balance.entity';
import { DashboardEstoqueGraosProdutorEntries } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-produtor-entries.entity';
import { DashboardEstoqueGraosProdutorOutflow } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-produtor-outflow.entity';
import { DashboardEstoqueGraoProdutorPreviousBalance } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-produtor-previous-balance.entity';

@Injectable()
export class FirebirdDashboardEstoqueGraosRepository
  implements DashboardEstoqueGraosRepository
{
  constructor(private readonly firebird: FirebirdService) {}

  async findPreviousBalance(
    host: string,
    code: string,
    filters: FindPreviousBalanceDto,
  ): Promise<number> {
    const { cropId, startDate, storageId, harvestId } = filters;

    return (
      await this.firebird.query<DashboardEstoqueGraosPreviousBalance>(
        host,
        code,
        `select sum(total) as saldo
        from (
          select
            sum(colheita.peso_liquido) as total
          from colheita
          where colheita.id_cultura = ${cropId}
          and colheita.situacao = 2
          ${startDate ? `and colheita.data < '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${storageId ? `and colheita.id_estoque_agri_local = ${storageId}` : ''}
          ${harvestId ? `and colheita.id_ciclo_producao = ${harvestId}` : ''}

          union all

          select
            sum(venda_agricultura_saida.qtde_kgs) * -1 as total
          from venda_agricultura_saida
          inner join venda_agricultura_item on venda_agricultura_item.id = venda_agricultura_saida.id_venda_agricultura_item
          inner join venda_agricultura on venda_agricultura.id = venda_agricultura_item.id_venda_agricultura
          where venda_agricultura_item.id_cultura = ${cropId}
          and venda_agricultura_saida.situacao = 2
          ${startDate ? `and venda_agricultura_saida.data < '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${storageId ? `and venda_agricultura_saida.id_estoque_agri_local = ${storageId}` : ''}
          ${harvestId ? `and venda_agricultura_item.id_ciclo_producao = ${harvestId}` : ''}

          union all

          select
            sum(desconto_armazenamento_d.desconto_kg) * -1 as total
          from desconto_armazenamento_d
          inner join colheita on colheita.id = desconto_armazenamento_d.id_colheita
          where colheita.id_cultura = ${cropId}
          and colheita.situacao = 2
          ${startDate ? `and colheita.data < '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${storageId ? `and colheita.id_estoque_agri_local = ${storageId}` : ''}
          ${harvestId ? `and colheita.id_ciclo_producao = ${harvestId}` : ''}
        )`,
        FirebirdDashboardEstoqueGraosMapper.toPreviousBalanceDomain,
      )
    )[0].balance;
  }

  async findEntries(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ): Promise<DashboardEstoqueGraosEntries> {
    const { startDate, endDate, storageId, harvestId, cropId } = filters;

    return (
      await this.firebird.query<DashboardEstoqueGraosEntries>(
        host,
        code,
        ` select
          sum(colheita.subtotal) as peso,
          sum(
            colheita.avariados_desc_kg +
            colheita.esverdeados_desc_kg +
            colheita.quebrado_desc_kg +
            colheita.impureza_desc_kg +
            colheita.umidade_desc_kg
          ) as desconto_classificacao,
          sum(colheita.taxa_recepcao_desc_kg) as taxa_recepcao,
          sum(colheita.cota_desc_kg) as cota_capital,
          coalesce(sum(desconto_armazenamento.taxa_armazenamento), 0) as taxa_armazenamento,
          coalesce(sum(desconto_armazenamento.quebra_tecnica), 0) as quebra_tecnica
        from colheita
        left join (
          select
            desconto_armazenamento_d.id_colheita,
            sum(case when desconto_armazenamento_d.tipo = 1 then desconto_armazenamento_d.desconto_kg end) as taxa_armazenamento,
            sum(case when desconto_armazenamento_d.tipo = 2 then desconto_armazenamento_d.desconto_kg end) as quebra_tecnica
          from desconto_armazenamento_d
          inner join desconto_armazenamento_m on desconto_armazenamento_m.id = desconto_armazenamento_d.id_desconto_armazenamento_m
          where desconto_armazenamento_d.id > 0
          ${startDate ? `and desconto_armazenamento_m.data >= '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${endDate ? `and desconto_armazenamento_m.data <= '${format(endDate, 'yyyy-MM-dd')}'` : ''}
          group by desconto_armazenamento_d.id_colheita
        ) desconto_armazenamento on desconto_armazenamento.id_colheita = colheita.id
        where colheita.id_cultura = ${cropId}
        and colheita.situacao = 2
        ${startDate ? `and colheita.data >= '${format(startDate, 'yyyy-MM-dd')}'` : ''}
        ${endDate ? `and colheita.data <= '${format(endDate, 'yyyy-MM-dd')}'` : ''}
        ${storageId ? `and colheita.id_estoque_agri_local = ${storageId}` : ''}
        ${harvestId ? `and colheita.id_ciclo_producao = ${harvestId}` : ''}`,
        FirebirdDashboardEstoqueGraosMapper.toEntriesDomain,
      )
    )[0];
  }

  async findOutflow(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ): Promise<DashboardEstoqueGraosOutflow> {
    const { cropId, startDate, endDate, storageId, harvestId } = filters;

    return (
      await this.firebird.query<DashboardEstoqueGraosOutflow>(
        host,
        code,
        `select
          coalesce(sum(venda_agricultura_saida.subtotal), 0) as peso,
          coalesce(sum(venda_agricultura_saida.total_descontos), 0) as desconto_classificacao
        from venda_agricultura_saida
        inner join venda_agricultura_item on venda_agricultura_item.id = venda_agricultura_saida.id_venda_agricultura_item
        inner join venda_agricultura on venda_agricultura.id = venda_agricultura_item.id_venda_agricultura
        where venda_agricultura_item.id_cultura = ${cropId}
        and venda_agricultura_saida.situacao = 2
        ${startDate ? `and venda_agricultura_saida.data >= '${format(startDate, 'yyyy-MM-dd')}'` : ''}
        ${endDate ? `and venda_agricultura_saida.data <= '${format(endDate, 'yyyy-MM-dd')}'` : ''}
        ${storageId ? `and venda_agricultura_saida.id_estoque_agri_local = ${storageId}` : ''}
        ${harvestId ? `and venda_agricultura_item.id_ciclo_producao = ${harvestId}` : ''}`,
        FirebirdDashboardEstoqueGraosMapper.toOutflowDomain,
      )
    )[0];
  }

  findProdutorEntries(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ) {
    const { cropId, startDate, endDate, harvestId, storageId } = filters;

    return this.firebird.query<DashboardEstoqueGraosProdutorEntries>(
      host,
      code,
      `SELECT
        p.ID AS ID_PRODUTOR,
        p.RAZAO_SOCIAL AS PRODUTOR,
        COALESCE(SUM(c.SUBTOTAL), 0) AS PESO,
        COALESCE(SUM(
          c.AVARIADOS_DESC_KG +
          c.ESVERDEADOS_DESC_KG +
          c.QUEBRADO_DESC_KG +
          c.IMPUREZA_DESC_KG +
          c.UMIDADE_DESC_KG 
        ), 0) AS DESCONTO_CLASSIFICACAO,
        COALESCE(SUM(c.TAXA_RECEPCAO_DESC_KG), 0) AS TAXA_RECEPCAO,
        COALESCE(SUM(c.COTA_DESC_KG), 0) AS COTA_CAPITAL,
        COALESCE(SUM(da.TAXA_ARMAZENAMENTO), 0) AS TAXA_ARMAZENAMENTO,
        COALESCE(SUM(da.QUEBRA_TECNICA), 0) AS QUEBRA_TECNICA 
      FROM COLHEITA c 
      INNER JOIN PESSOA p ON p.ID = c.ID_CLIENTE_SILO 
      LEFT JOIN (
        SELECT 
          dad.ID_COLHEITA,
          SUM(CASE WHEN dad.TIPO = 1 THEN dad.DESCONTO_KG END) AS TAXA_ARMAZENAMENTO,
          SUM(CASE WHEN dad.TIPO = 2 THEN dad.DESCONTO_KG END) AS QUEBRA_TECNICA
        FROM DESCONTO_ARMAZENAMENTO_D dad 
        GROUP BY DAD.ID_COLHEITA
      ) da ON da.ID_COLHEITA = c.ID  
      WHERE c.ID_CULTURA = ${cropId}
      AND c.SITUACAO = 2
      ${startDate ? `AND c."DATA" >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND c."DATA" <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
      ${storageId ? `AND c.ID_ESTOQUE_AGRI_LOCAL = ${storageId}` : ''}
      ${harvestId ? `AND c.ID_CICLO_PRODUCAO = ${harvestId}` : ''}
      GROUP BY ID_PRODUTOR, PRODUTOR`,
      FirebirdDashboardEstoqueGraosMapper.toProdutorEntryDomain,
    );
  }

  findProdutorOutflow(
    host: string,
    code: string,
    filters: DashboardEstoqueGraosFiltersDto,
  ) {
    const { cropId, startDate, endDate, harvestId, storageId } = filters;

    return this.firebird.query<DashboardEstoqueGraosProdutorOutflow>(
      host,
      code,
      `SELECT 
        p.ID AS ID_PRODUTOR,
        p.RAZAO_SOCIAL AS PRODUTOR,
        COALESCE(SUM(vas.SUBTOTAL), 0) AS PESO,
        COALESCE(SUM(vas.TOTAL_DESCONTOS), 0) AS DESCONTO_CLASSIFICACAO
      FROM VENDA_AGRICULTURA_SAIDA vas 
      INNER JOIN VENDA_AGRICULTURA_ITEM vai ON vai.ID = vas.ID_VENDA_AGRICULTURA_ITEM 
      INNER JOIN VENDA_AGRICULTURA va ON va.ID = vai.ID_VENDA_AGRICULTURA 
      INNER JOIN PESSOA p ON p.ID = va.ID_CLIENTE_SILO
      WHERE vai.ID_CULTURA = ${cropId}
      AND vas.SITUACAO = 2
      ${startDate ? `AND vas."DATA" >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND vas."DATA" <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
      ${storageId ? `AND vas.ID_ESTOQUE_AGRI_LOCAL = ${storageId}` : ''}
      ${harvestId ? `AND vai.ID_CICLO_PRODUCAO = ${harvestId}` : ''}
      GROUP BY ID_PRODUTOR, PRODUTOR`,
      FirebirdDashboardEstoqueGraosMapper.toProdutorOutflowDomain,
    );
  }

  findProdutorPreviousBalance(
    host: string,
    code: string,
    filters: FindPreviousBalanceDto,
  ) {
    const { cropId, startDate, harvestId, storageId } = filters;

    return this.firebird.query<DashboardEstoqueGraoProdutorPreviousBalance>(
      host,
      code,
      `SELECT 
        ID_PRODUTOR,
        PRODUTOR,
        COALESCE(SUM(SALDO), 0) AS SALDO
      FROM (
        SELECT 
          p.ID AS ID_PRODUTOR,
          p.RAZAO_SOCIAL AS PRODUTOR,
          COALESCE(SUM(c.PESO_LIQUIDO), 0) AS SALDO
        FROM COLHEITA c 
        INNER JOIN PESSOA p ON p.ID = c.ID_CLIENTE_SILO 
        WHERE c.ID_CULTURA = ${cropId}
        AND c.SITUACAO = 2
        ${startDate ? `AND c."DATA" < '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${storageId ? `AND c.ID_ESTOQUE_AGRI_LOCAL = ${storageId}` : ''}
        ${harvestId ? `AND c.ID_CICLO_PRODUCAO = ${harvestId}` : ''}
        GROUP BY ID_PRODUTOR, PRODUTOR
        
        UNION ALL
        
        SELECT 
          p.ID AS ID_PRODUTOR,
          p.RAZAO_SOCIAL AS PRODUTOR,
          COALESCE(SUM(vas.QTDE_KGS), 0) * -1 AS SALDO 
        FROM VENDA_AGRICULTURA_SAIDA vas 
        INNER JOIN VENDA_AGRICULTURA_ITEM vai ON vai.ID = vas.ID_VENDA_AGRICULTURA_ITEM 
        INNER JOIN VENDA_AGRICULTURA va ON va.ID = vai.ID_VENDA_AGRICULTURA 
        INNER JOIN PESSOA p ON p.ID = va.ID_CLIENTE_SILO
        WHERE vai.ID_CULTURA = ${cropId}
        AND vas.SITUACAO = 2
        ${startDate ? `AND vas."DATA" < '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${storageId ? `AND vas.ID_ESTOQUE_AGRI_LOCAL = ${storageId}` : ''}
        ${harvestId ? `AND vai.ID_CICLO_PRODUCAO = ${harvestId}` : ''}
        GROUP BY ID_PRODUTOR, PRODUTOR
        
        UNION ALL
        
        SELECT
          p.ID AS ID_PRODUTOR,
          p.RAZAO_SOCIAL AS PRODUTOR,
          COALESCE(SUM(dad.DESCONTO_KG), 0) * -1 AS SALDO 
        FROM DESCONTO_ARMAZENAMENTO_D dad 
        INNER JOIN COLHEITA c ON c.ID = dad.ID_COLHEITA 
        INNER JOIN PESSOA p ON p.ID = c.ID_CLIENTE_SILO 
        WHERE c.ID_CULTURA = ${cropId}
        AND c.SITUACAO = 2
        ${startDate ? `AND c."DATA" < '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${storageId ? `AND c.ID_ESTOQUE_AGRI_LOCAL = ${storageId}` : ''}
        ${harvestId ? `AND c.ID_CICLO_PRODUCAO = ${harvestId}` : ''}
        GROUP BY ID_PRODUTOR, PRODUTOR
      ) GROUP BY ID_PRODUTOR, PRODUTOR`,
      FirebirdDashboardEstoqueGraosMapper.toProdutorPreviousBalanceDomain,
    );
  }
}

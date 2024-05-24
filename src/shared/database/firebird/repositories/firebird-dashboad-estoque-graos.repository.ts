import { Injectable } from '@nestjs/common';
import { DashboardEstoqueGraosRepository } from 'src/modules/dashboard-estoque-graos/dashboard-estoque-graos.repository';
import { DashboardEstoqueGraosEntries } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-entries.entity';
import { DashboardEstoqueGraosOutflow } from 'src/modules/dashboard-estoque-graos/entities/dashboard-estoque-grao-outflow.entity';
import { FirebirdService } from '../firebird.service';
import { FirebirdDashboardEstoqueGraosMapper } from '../mappers/firebird-dashboard-estoque-graos.mapper';
import { format } from 'date-fns';
import {
  DashboardEstoqueGraosArgsDto,
  FindPreviousBalanceArgsDto,
} from 'src/modules/dashboard-estoque-graos/dto/estoque-graos-args.dto';

@Injectable()
export class FirebirdDashboardEstoqueGraosRepository
  implements DashboardEstoqueGraosRepository
{
  constructor(private readonly firebird: FirebirdService) {}

  async findPreviousBalance({
    dbConnection,
    filters,
  }: FindPreviousBalanceArgsDto): Promise<number> {
    const { idCultura, startDate, idArmazenamento, idSafra } = filters;
    const { host, code } = dbConnection;

    return await this.firebird
      .query<number>(
        host,
        code,
        ` select sum(total) as saldo
        from (
          select
            sum(colheita.peso_liquido) as total
          from colheita
          where colheita.id_cultura = ${idCultura}
          and colheita.situacao = 2
          ${startDate ? `and colheita.data < '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${idArmazenamento ? `and colheita.id_estoque_agri_local = ${idArmazenamento}` : ''}
          ${idSafra ? `and colheita.id_ciclo_producao = ${idSafra}` : ''}

          union all

          select
            sum(venda_agricultura_saida.qtde_kgs) * -1 as total
          from venda_agricultura_saida
          inner join venda_agricultura_item on venda_agricultura_item.id = venda_agricultura_saida.id_venda_agricultura_item
          inner join venda_agricultura on venda_agricultura.id = venda_agricultura_item.id_venda_agricultura
          where venda_agricultura_item.id_cultura = ${idCultura}
          and venda_agricultura_saida.situacao = 2
          ${startDate ? `and venda_agricultura_saida.data < '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${idArmazenamento ? `and venda_agricultura_saida.id_estoque_agri_local = ${idArmazenamento}` : ''}
          ${idSafra ? `and venda_agricultura_item.id_ciclo_producao = ${idSafra}` : ''}

          union all

          select
            sum(desconto_armazenamento_d.desconto_kg) * -1 as total
          from desconto_armazenamento_d
          inner join colheita on colheita.id = desconto_armazenamento_d.id_colheita
          where colheita.id_cultura = ${idCultura}
          and colheita.situacao = 2
          ${startDate ? `and colheita.data < '${format(startDate, 'yyyy-MM-dd')}'` : ''}
          ${idArmazenamento ? `and colheita.id_estoque_agri_local = ${idArmazenamento}` : ''}
          ${idSafra ? `and colheita.id_ciclo_producao = ${idSafra}` : ''}
        )`,
      )
      .then((results) => results[0]);
  }

  async findEntries({
    dbConnection,
    filters,
  }: DashboardEstoqueGraosArgsDto): Promise<DashboardEstoqueGraosEntries> {
    const { idCultura, startDate, endDate, idArmazenamento, idSafra } = filters;
    const { host, code } = dbConnection;

    return await this.firebird
      .query<DashboardEstoqueGraosEntries>(
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
        where colheita.id_cultura = ${idCultura}
        and colheita.situacao = 2
        ${startDate ? `and colheita.data >= '${format(startDate, 'yyyy-MM-dd')}'` : ''}
        ${endDate ? `and colheita.data <= '${format(endDate, 'yyyy-MM-dd')}'` : ''}
        ${idArmazenamento ? `and colheita.id_estoque_agri_local = ${idArmazenamento}` : ''}
        ${idSafra ? `and colheita.id_ciclo_producao = ${idSafra}` : ''}`,
        FirebirdDashboardEstoqueGraosMapper.toEntriesDomain,
      )
      .then((results) => results[0]);
  }

  async findOutflow({
    dbConnection,
    filters,
  }: DashboardEstoqueGraosArgsDto): Promise<DashboardEstoqueGraosOutflow> {
    const { idCultura, startDate, endDate, idArmazenamento, idSafra } = filters;
    const { host, code } = dbConnection;

    return await this.firebird
      .query<DashboardEstoqueGraosOutflow>(
        host,
        code,
        `select
          coalesce(sum(venda_agricultura_saida.subtotal), 0) as peso,
          coalesce(sum(venda_agricultura_saida.total_descontos), 0) as desconto_classificacao
        from venda_agricultura_saida
        inner join venda_agricultura_item on venda_agricultura_item.id = venda_agricultura_saida.id_venda_agricultura_item
        inner join venda_agricultura on venda_agricultura.id = venda_agricultura_item.id_venda_agricultura
        where venda_agricultura_item.id_cultura = ${idCultura}
        and venda_agricultura_saida.situacao = 2
        ${startDate ? `and venda_agricultura_saida.data >= '${format(startDate, 'yyyy-MM-dd')}'` : ''}
        ${endDate ? `and venda_agricultura_saida.data <= '${format(endDate, 'yyyy-MM-dd')}'` : ''}
        ${idArmazenamento ? `and venda_agricultura_saida.id_estoque_agri_local = ${idArmazenamento}` : ''}
        ${idSafra ? `and venda_agricultura_item.id_ciclo_producao = ${idSafra}` : ''}`,
        FirebirdDashboardEstoqueGraosMapper.toOutflowDomain,
      )
      .then((results) => results[0]);
  }
}

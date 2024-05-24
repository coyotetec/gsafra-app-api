import { DashboardCustoProducaoRepository } from 'src/modules/dashboard-custo-producao/dashboard-custo-producao.repository';
import { FindCategoryTotalDto } from 'src/modules/dashboard-custo-producao/dto/find-category-total.dto';
import { CustoProducaoCategory } from 'src/modules/dashboard-custo-producao/entities/custo-producao-category.entity';
import { FirebirdService } from '../firebird.service';
import { Injectable } from '@nestjs/common';
import { FirebirdDashboardCustoProducaoMapper } from '../mappers/firebird-dashboard-custo-producao.mapper';
import { format } from 'date-fns';
import { FindPlotTotalDto } from 'src/modules/dashboard-custo-producao/dto/find-plot-total.dto';
import { CustoProducaoPlot } from 'src/modules/dashboard-custo-producao/entities/custo-producao-plot.entity';

@Injectable()
export class FirebirdDashboardCustoProducaoRepository
  implements DashboardCustoProducaoRepository
{
  constructor(private firebird: FirebirdService) {}

  findCustoCategory(host: string, code: string, filters: FindCategoryTotalDto) {
    const { harvestId, startDate, endDate } = filters;

    return this.firebird.query<CustoProducaoCategory>(
      host,
      code,
      `SELECT 
        COALESCE(CAST(SUM(act.VALOR) AS NUMERIC(15, 2)), 0) AS TOTAL,
        'Abastecimento' AS CATEGORIA
      FROM ABASTECIMENTO_CICLO_TS act
      INNER JOIN ABASTECIMENTO_CICLO ac ON ac.ID = act.ID_ABASTECIMENTO_CICLO 
      INNER JOIN ABASTECIMENTO a ON a.ID = ac.ID_ABASTECIMENTO 
      WHERE a.STATUS_PROCESSAMENTO = 2
      AND ac.ID_CICLO_PRODUCAO IN (${harvestId})
      ${startDate ? `AND a."DATA" >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND a."DATA" <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
      
      UNION
      
      SELECT 
        COALESCE(CAST(SUM(mcct.VALOR) AS NUMERIC(15, 2)), 0) AS TOTAL,
        'Despesas Financeiras' AS CATEGORIA
      FROM MOVIMENTO_CONTA_CICLO_TS mcct 
      INNER JOIN MOVIMENTO_CONTA_CICLO mcc ON mcc.id = mcct.ID_MOVIMENTO_CONTA_CICLO 
      INNER JOIN MOVIMENTO_CONTA_APROPRIACAO mca ON mca.ID = mcc.ID_MOVIMENTO_CONTA_APROPRIACAO 
      INNER JOIN MOVIMENTO_CONTA mc ON mc.id = mca.ID_MOVIMENTO_CONTA 
      INNER JOIN MOVIMENTO_CONTA_M mcm ON mcm.ID = mc.ID_MOVIMENTO_CONTA_M 
      WHERE mcm.TIPO_LANCAMENTO = 'D'
      AND mca.APROPRIACAO_CUSTO = 1
      AND mcm.COMPENSADO = 'S'
      AND mcc.ID_CICLO_PRODUCAO IN (${harvestId})
      ${startDate ? `AND mcm.DATA_COMPENSACAO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND mcm.DATA_COMPENSACAO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
      
      UNION
      
      SELECT 
        COALESCE(CAST(SUM(TOTAL) AS NUMERIC(15, 2)), 0) AS TOTAL,
        CATEGORIA
      FROM (
        SELECT 
          SUM(mmct.VALOR) AS TOTAL,
          'Despesas Patrimônio' AS CATEGORIA
        FROM MANUTENCAO_M_CICLO_TS mmct
        INNER JOIN MANUTENCAO_M_CICLO mmc ON mmc.ID = mmct.ID_MANUTENCAO_M_CICLO
        INNER JOIN MANUTENCAO_M mm ON mm.ID = mmc.ID_MANUTENCAO_M
        WHERE mmc.ID_CICLO_PRODUCAO IN (${harvestId})
        ${startDate ? `AND mm.DATA >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND mm.DATA <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
        
        UNION ALL 
        
        SELECT
          SUM(mcct.VALOR) AS TOTAL,
          'Despesas Patrimônio' AS CATEGORIA
        FROM MOVIMENTO_CONTA_CICLO_TS mcct 
        INNER JOIN MOVIMENTO_CONTA_CICLO mcc ON mcc.id = mcct.ID_MOVIMENTO_CONTA_CICLO 
        INNER JOIN MOVIMENTO_CONTA_APROPRIACAO mca ON mca.ID = mcc.ID_MOVIMENTO_CONTA_APROPRIACAO 
        INNER JOIN MOVIMENTO_CONTA mc ON mc.id = mca.ID_MOVIMENTO_CONTA 
        INNER JOIN MOVIMENTO_CONTA_M mcm ON mcm.ID = mc.ID_MOVIMENTO_CONTA_M 
        WHERE mcm.TIPO_LANCAMENTO = 'D'
        AND mca.APROPRIACAO_CUSTO = 4
        AND mcm.COMPENSADO = 'S'
        AND mcc.ID_CICLO_PRODUCAO IN (${harvestId})
        ${startDate ? `AND mcm.DATA_COMPENSACAO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND mcm.DATA_COMPENSACAO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
      ) GROUP BY CATEGORIA
      
      UNION
      
      SELECT 
        COALESCE(CAST(SUM(
          (CAST(aats.PROPORCAO as NUMERIC(15,5)) / 100) *
          (
            SELECT SUM(aai.QTDE * aai.CUSTO_MEDIO)
            FROM AGRI_ATV_INSUMO aai 
            where aai.ID_AGRI_ATV = aats.ID_AGRI_ATV
          )
        ) AS NUMERIC (15, 2)), 0),
        'Atividades Agrícolas' as categoria
      FROM AGRI_ATV_TALHAO_SAFRA aats 
      INNER JOIN AGRI_ATV aa ON aa.id = aats.ID_AGRI_ATV 
      WHERE aa.ID_CICLO_PRODUCAO IN (${harvestId})
      AND aa.STATUS_PROCESSAMENTO = 2
      ${startDate ? `AND aa.DATA_INICIO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
      ${endDate ? `AND aa.DATA_INICIO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}`,
      FirebirdDashboardCustoProducaoMapper.toCategoryDomain,
    );
  }

  findCustoPlot(host: string, code: string, filters: FindPlotTotalDto) {
    const { harvestId, startDate, endDate } = filters;

    return this.firebird.query<CustoProducaoPlot>(
      host,
      code,
      `SELECT 
        SUM(TOTAL) AS TOTAL,
        TALHAO,
        VARIEDADE,
        AREA,
        SAFRA
      FROM (
        SELECT 
          COALESCE(CAST(SUM(act.VALOR) AS NUMERIC(15, 2)), 0) AS TOTAL,
          t.DESCRICAO AS TALHAO,
          v.NOME AS VARIEDADE,
          ts.HECTARES AS AREA,
          cp.NOME AS SAFRA
        FROM ABASTECIMENTO_CICLO_TS act
        INNER JOIN ABASTECIMENTO_CICLO ac ON ac.ID = act.ID_ABASTECIMENTO_CICLO 
        INNER JOIN ABASTECIMENTO a ON a.ID = ac.ID_ABASTECIMENTO 
        INNER JOIN TALHAO_SAFRA ts ON ts.ID = act.ID_TALHAO_SAFRA 
        INNER JOIN TALHAO t ON t.ID = ts.ID_TALHAO 
        INNER JOIN VARIEDADE v ON v.ID = ts.ID_VARIEDADE 
        INNER JOIN CICLO_PRODUCAO cp ON cp.ID = ts.ID_CICLO_PRODUCAO 
        WHERE a.STATUS_PROCESSAMENTO = 2
        AND ac.ID_CICLO_PRODUCAO IN (${harvestId})
        ${startDate ? `AND a."DATA" >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND a."DATA" <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
        GROUP BY TALHAO, VARIEDADE, AREA, SAFRA
        
        UNION ALL 
        
        SELECT 
          COALESCE(CAST(SUM(mcct.VALOR) AS NUMERIC(15, 2)), 0) AS TOTAL,
          t.DESCRICAO AS TALHAO,
          v.NOME AS VARIEDADE,
          ts.HECTARES AS AREA,
          cp.NOME AS SAFRA
        FROM MOVIMENTO_CONTA_CICLO_TS mcct 
        INNER JOIN MOVIMENTO_CONTA_CICLO mcc ON mcc.id = mcct.ID_MOVIMENTO_CONTA_CICLO 
        INNER JOIN MOVIMENTO_CONTA_APROPRIACAO mca ON mca.ID = mcc.ID_MOVIMENTO_CONTA_APROPRIACAO 
        INNER JOIN MOVIMENTO_CONTA mc ON mc.id = mca.ID_MOVIMENTO_CONTA 
        INNER JOIN MOVIMENTO_CONTA_M mcm ON mcm.ID = mc.ID_MOVIMENTO_CONTA_M 
        INNER JOIN TALHAO_SAFRA ts ON ts.ID = mcct.ID_TALHAO_SAFRA 
        INNER JOIN TALHAO t ON t.ID = ts.ID_TALHAO 
        INNER JOIN VARIEDADE v ON v.ID = ts.ID_VARIEDADE 
        INNER JOIN CICLO_PRODUCAO cp ON cp.ID = ts.ID_CICLO_PRODUCAO 
        WHERE mcm.TIPO_LANCAMENTO = 'D'
        AND mca.APROPRIACAO_CUSTO IN (1, 4)
        AND mcm.COMPENSADO = 'S'
        AND mcc.ID_CICLO_PRODUCAO IN (${harvestId})
        ${startDate ? `AND mcm.DATA_COMPENSACAO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND mcm.DATA_COMPENSACAO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
        GROUP BY TALHAO, VARIEDADE, AREA, SAFRA
        
        UNION ALL 
        
        SELECT 
          SUM(mmct.VALOR) AS TOTAL,
          t.DESCRICAO AS TALHAO,
          v.NOME AS VARIEDADE,
          ts.HECTARES AS AREA,
          cp.NOME AS SAFRA
        FROM MANUTENCAO_M_CICLO_TS mmct
        INNER JOIN MANUTENCAO_M_CICLO mmc ON mmc.ID = mmct.ID_MANUTENCAO_M_CICLO
        INNER JOIN MANUTENCAO_M mm ON mm.ID = mmc.ID_MANUTENCAO_M
        INNER JOIN TALHAO_SAFRA ts ON ts.ID = mmct.ID_TALHAO_SAFRA 
        INNER JOIN TALHAO t ON t.ID = ts.ID_TALHAO 
        INNER JOIN VARIEDADE v ON v.ID = ts.ID_VARIEDADE 
        INNER JOIN CICLO_PRODUCAO cp ON cp.ID = ts.ID_CICLO_PRODUCAO 
        WHERE mmc.ID_CICLO_PRODUCAO IN (${harvestId})
        ${startDate ? `AND mm.DATA >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND mm.DATA <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
        GROUP BY TALHAO, VARIEDADE, AREA, SAFRA
        
        UNION ALL 
        
        SELECT 
          COALESCE(CAST(SUM(
              (CAST(aats.PROPORCAO as NUMERIC(15,5)) / 100) *
              (
                  SELECT SUM(aai.QTDE * aai.CUSTO_MEDIO)
                  FROM AGRI_ATV_INSUMO aai 
                  where aai.ID_AGRI_ATV = aats.ID_AGRI_ATV
              )
          ) AS NUMERIC (15, 2)), 0),
          t.DESCRICAO AS TALHAO,
          v.NOME AS VARIEDADE,
          ts.HECTARES AS AREA,
          cp.NOME AS SAFRA
        FROM AGRI_ATV_TALHAO_SAFRA aats 
        INNER JOIN AGRI_ATV aa ON aa.id = aats.ID_AGRI_ATV 
        INNER JOIN TALHAO_SAFRA ts ON ts.ID = aats.ID_TALHAO_SAFRA 
        INNER JOIN TALHAO t ON t.ID = ts.ID_TALHAO 
        INNER JOIN VARIEDADE v ON v.ID = ts.ID_VARIEDADE 
        INNER JOIN CICLO_PRODUCAO cp ON cp.ID = ts.ID_CICLO_PRODUCAO
        WHERE aa.ID_CICLO_PRODUCAO IN (${harvestId})
        AND aa.STATUS_PROCESSAMENTO = 2
        ${startDate ? `AND aa.DATA_INICIO >= '${format(startDate, 'MM/dd/yyyy')}'` : ''}
        ${endDate ? `AND aa.DATA_INICIO <= '${format(endDate, 'MM/dd/yyyy')}'` : ''}
        GROUP BY TALHAO, VARIEDADE, AREA, SAFRA
      )
      GROUP BY TALHAO, VARIEDADE, AREA, SAFRA
      ORDER BY TOTAL DESC`,
      FirebirdDashboardCustoProducaoMapper.toPlotDomain,
    );
  }
}

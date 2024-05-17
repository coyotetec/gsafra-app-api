import {
  BadRequestException,
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DashboardCustoProducaoService } from './dashboard-custo-producao.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { parse } from 'date-fns';

@Controller('dashboard/custo-producao')
export class DashboardCustoProducaoController {
  constructor(
    private readonly dashboardCustoProducaoService: DashboardCustoProducaoService,
  ) {}

  @Get('categoria')
  findCategoryTotal(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query(
      'harvestId',
      new ParseIntPipe({
        exceptionFactory() {
          throw new BadRequestException('ID da safra é obrigatório');
        },
      }),
    )
    harvestId: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const parsedStartDate = startDate
      ? parse(startDate, 'dd/MM/yyyy', new Date())
      : undefined;
    const parsedEndDate = endDate
      ? parse(endDate, 'dd/MM/yyyy', new Date())
      : undefined;

    if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
      throw new BadRequestException(
        'Data final precisa ser maior ou igual que a inicial',
      );
    }

    return this.dashboardCustoProducaoService.findCategoryTotal(host, code, {
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      harvestId,
    });
  }

  @Get('talhao')
  findPlotTotal(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query(
      'harvestId',
      new ParseIntPipe({
        exceptionFactory() {
          throw new BadRequestException('ID da safra é obrigatório');
        },
      }),
    )
    harvestId: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const parsedStartDate = startDate
      ? parse(startDate, 'dd/MM/yyyy', new Date())
      : undefined;
    const parsedEndDate = endDate
      ? parse(endDate, 'dd/MM/yyyy', new Date())
      : undefined;

    if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
      throw new BadRequestException(
        'Data final precisa ser maior ou igual que a inicial',
      );
    }

    return this.dashboardCustoProducaoService.findPlotTotal(host, code, {
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      harvestId,
    });
  }
}

import {
  BadRequestException,
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DashboardEstoqueGraosService } from './dashboard-estoque-graos.service';
import { parse } from 'date-fns';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';

@Controller('dashboard-estoque-graos')
export class DashboardEstoqueGraosController {
  constructor(
    private readonly dashboardEstoqueGraosService: DashboardEstoqueGraosService,
  ) {}

  @Get()
  findTotalBalance(
    @Query('idCultura', ParseIntPipe) idCultura: number,
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('idArmazenamento', new ParseIntPipe({ optional: true }))
    idArmazenamento?: number,
    @Query('idSafra', new ParseIntPipe({ optional: true })) idSafra?: number,
  ) {
    const parsedStartDate = startDate
      ? parse(startDate, 'dd-MM-yyyy', new Date())
      : undefined;
    const parsedEndDate = endDate
      ? parse(endDate, 'dd-MM-yyyy', new Date())
      : undefined;

    if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
      throw new BadRequestException(
        'Data final precisa ser após a data inicial',
      );
    }

    return this.dashboardEstoqueGraosService.findTotalBalance({
      filters: {
        idCultura,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        idArmazenamento,
        idSafra,
      },
      dbConnection: { host, code },
    });
  }
}

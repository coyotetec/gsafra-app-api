import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DashboardIndicadoresService } from './dashboard-indicadores.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { parse } from 'date-fns';

@Controller('dashboard/indicadores')
export class DashboardIndicadoresController {
  constructor(
    private readonly dashboardIndicadoresService: DashboardIndicadoresService,
  ) {}

  @Get()
  findViews(@DBConnectionData() { host, code }: DBConnectionDataType) {
    return this.dashboardIndicadoresService.findViews(host, code);
  }

  @Get(':id')
  findViewData(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Param('id', ParseIntPipe) id: number,
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

    return this.dashboardIndicadoresService.findViewData(host, code, id, {
      startDate: parsedStartDate,
      endDate: parsedEndDate,
    });
  }
}

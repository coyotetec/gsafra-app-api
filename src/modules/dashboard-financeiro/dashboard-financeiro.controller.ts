import {
  BadRequestException,
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DashboardFinanceiroService } from './dashboard-financeiro.service';
import {
  DBConnectionData,
  DBConnectionDataType,
} from 'src/shared/decorators/DBConnectionData';
import { parse } from 'date-fns';

@Controller('dashboard/financeiro')
export class DashboardFinanceiroController {
  constructor(
    private readonly dashboardFinanceiroService: DashboardFinanceiroService,
  ) {}

  @Get()
  async findTotalizers(
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('harvestId', new ParseIntPipe({ optional: true })) harvestId: number,
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

    return this.dashboardFinanceiroService.findTotalizers(host, code, {
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      harvestId,
    });
  }
}

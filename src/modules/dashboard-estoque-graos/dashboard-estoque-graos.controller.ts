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

@Controller('dashboard/estoque-graos')
export class DashboardEstoqueGraosController {
  constructor(
    private readonly dashboardEstoqueGraosService: DashboardEstoqueGraosService,
  ) {}

  @Get()
  findTotalBalance(
    @Query(
      'cropId',
      new ParseIntPipe({
        exceptionFactory() {
          throw new BadRequestException('ID da cultura é obrigatório');
        },
      }),
    )
    cropId: number,
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('storageId', new ParseIntPipe({ optional: true }))
    storageId?: number,
    @Query('hasvestId', new ParseIntPipe({ optional: true }))
    harvestId?: number,
  ) {
    const parsedStartDate = startDate
      ? parse(startDate, 'dd/MM/yyyy', new Date())
      : undefined;
    const parsedEndDate = endDate
      ? parse(startDate, 'dd/MM/yyyy', new Date())
      : undefined;

    if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
      throw new BadRequestException(
        'Data final precisa ser após a data inicial',
      );
    }

    return this.dashboardEstoqueGraosService.findTotalBalance(host, code, {
      cropId,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      storageId,
      harvestId,
    });
  }

  @Get('produtores')
  findProdutoresBalance(
    @Query(
      'cropId',
      new ParseIntPipe({
        exceptionFactory() {
          throw new BadRequestException('ID da cultura é obrigatório');
        },
      }),
    )
    cropId: number,
    @DBConnectionData() { host, code }: DBConnectionDataType,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('storageId', new ParseIntPipe({ optional: true }))
    storageId?: number,
    @Query('hasvestId', new ParseIntPipe({ optional: true }))
    harvestId?: number,
  ) {
    const parsedStartDate = startDate
      ? parse(startDate, 'dd/MM/yyyy', new Date())
      : undefined;
    const parsedEndDate = endDate
      ? parse(startDate, 'dd/MM/yyyy', new Date())
      : undefined;

    if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
      throw new BadRequestException(
        'Data final precisa ser após a data inicial',
      );
    }

    return this.dashboardEstoqueGraosService.findProdutorBalance(host, code, {
      cropId,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      storageId,
      harvestId,
    });
  }
}

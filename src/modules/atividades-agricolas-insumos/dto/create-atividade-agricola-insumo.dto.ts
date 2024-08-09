import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class InsumoDto {
  @IsString()
  idMobile: string;

  @IsNumber()
  idProdutoAlmoxarifado: number;

  @IsNumber()
  idUnidade: number;

  @IsNumber()
  idAlmoxarifado: number;

  @IsOptional()
  @IsNumber()
  idPlanAtvInsumo?: number;

  @IsNumber()
  quantidade: number;
}

export class CreateAtividadeAgricolaInsumoDto {
  @IsNumber()
  atividadeAgricolaId: number;

  @Type(() => InsumoDto)
  insumo: InsumoDto;
}

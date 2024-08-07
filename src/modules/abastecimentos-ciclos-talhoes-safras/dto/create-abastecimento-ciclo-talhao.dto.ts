import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsInt,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class TalhaoSafraDto {
  @IsString()
  idMobile: string;

  @IsInt()
  id: number;

  @IsNumber()
  hectares: number;
}

export class CreateAbastecimentoCicloTalhaoDto {
  @IsInt()
  abastecimentoCicloId: number;

  @IsNumber()
  abastecimentoCicloSafraArea: number;

  @IsNumber()
  abastecimentoCicloValorSafra: number;

  @IsNumber()
  abastecimentoCicloValorAtualSafra: number;

  @ValidateNested({ each: true })
  @Type(() => TalhaoSafraDto)
  @ArrayMinSize(1)
  talhoesSafras: TalhaoSafraDto[];
}

import { Type } from 'class-transformer';
import { ArrayMinSize, IsInt, IsNumber, ValidateNested } from 'class-validator';
import { TalhaoSafraDto } from 'src/modules/abastecimentos-ciclos-talhoes-safras/dto/create-abastecimento-ciclo-talhao.dto';

export class SafraDto {
  @IsInt()
  id: number;

  @IsInt()
  todosTalhoes: number;

  @ValidateNested({ each: true })
  @Type(() => TalhaoSafraDto)
  @ArrayMinSize(1)
  talhoesSafras: TalhaoSafraDto[];
}

export class CreateAbastecimentoCicloDto {
  @IsInt()
  abastecimentoId: number;

  @IsNumber()
  abastecimentoTotalArea: number;

  @IsNumber()
  abastecimentoTotalMedio: number;

  @IsNumber()
  abastecimentoTotalAtual: number;

  @ValidateNested({ each: true })
  @Type(() => SafraDto)
  @ArrayMinSize(1)
  safras: SafraDto[];
}

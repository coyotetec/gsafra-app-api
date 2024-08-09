import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsInt,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { SafraDto } from 'src/modules/abastecimentos-ciclos/dto/create-abastecimento-ciclo.dto';

export class CreateAbastecimentoDto {
  @IsString()
  idMobile: string;

  @IsString()
  @Length(10, 10)
  data: string;

  @IsString()
  @IsOptional()
  numeroRequisicao?: string;

  @IsInt()
  idAlmoxarifado: number;

  @IsInt()
  idPatrimonio: number;

  @IsInt()
  idProdutoAlmoxarifado: number;

  @IsInt()
  idUsuario: number;

  @IsInt()
  quantidade: number;

  @IsInt()
  horimetro: number;

  @ValidateNested({ each: true })
  @Type(() => SafraDto)
  @ArrayMinSize(1)
  safras: SafraDto[];
}

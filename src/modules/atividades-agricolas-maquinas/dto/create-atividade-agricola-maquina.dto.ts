import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MaquinaDto {
  @IsString()
  idMobile: string;

  @IsNumber()
  idPatrimonio: number;

  @IsOptional()
  @IsNumber()
  horimetroInicial?: number;

  @IsOptional()
  @IsNumber()
  horimetroFinal?: number;

  @IsNumber()
  horasTrabalhadas: number;
}

export class CreateAtividadeAgricolaMaquinaDto {
  @IsNumber()
  atividadeAgricolaId: number;

  @Type(() => MaquinaDto)
  maquina: MaquinaDto;
}

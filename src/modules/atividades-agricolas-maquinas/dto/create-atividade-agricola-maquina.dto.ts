import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class MaquinaDto {
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

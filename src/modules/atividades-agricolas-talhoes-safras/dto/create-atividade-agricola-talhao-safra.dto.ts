import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class TalhaoSafraDto {
  @IsNumber()
  idTalhaoSafra: number;

  @IsNumber()
  hectares: number;

  @IsNumber()
  proporcao: number;

  @IsNumber()
  hectaresPlanejamento: number;

  @IsNumber()
  proporcaoPlanejamento: number;
}

export class CreateAtividadeAgricolaTalhaoSafraDto {
  @IsNumber()
  atividadeAgricolaId: number;

  @Type(() => TalhaoSafraDto)
  talhaoSafra: TalhaoSafraDto;
}

import {
  IsNumber
} from 'class-validator';

export class CreateManutencaoCicloDto {
  @IsNumber()
  idManutencao: number;
  @IsNumber()
  idCicloProducao: number;
  @IsNumber()
  totalHectares: number;
  @IsNumber()
  valor: number;
  @IsNumber()
  proporcao: number;
  @IsNumber()
  qtdeTalhao: number;
}

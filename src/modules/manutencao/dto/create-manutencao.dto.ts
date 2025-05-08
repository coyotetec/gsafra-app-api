import {
  IsNumber,
  IsString
} from 'class-validator';

export class CreateManutencaoDto {
  @IsNumber()
  idPessoa: number;
  @IsNumber()
  idPatrimonio: number;
  
  @IsNumber()
  tipoManutencao: number;
  @IsNumber()
  manutencao: number;
  @IsString()
  date: Date;
  @IsNumber()
  horimetro: number;
  @IsString()
  descricao: string;
  @IsNumber()
  situacao: number;
  @IsNumber()
  totalServico: number;
  @IsNumber()
  totalPecas: number;
  @IsNumber()
  totalGeral: number;
}

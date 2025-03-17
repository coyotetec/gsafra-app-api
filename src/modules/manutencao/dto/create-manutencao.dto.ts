import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsString
} from 'class-validator';

export class CreateManutencaoDto {
  @IsNumber()
  idPessoa: number;
  @IsNumber()
  idPatrimonio: number;
  @IsNumber()
  idFornecedor: number;
  @IsNumber()
  tipoManutencao: number;
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

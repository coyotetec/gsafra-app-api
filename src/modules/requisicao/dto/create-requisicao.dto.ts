import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateProdutoRequisicaoDto } from 'src/modules/requisicao-produto/dto/create-requisicao-produto.dto';

export class CreateRequisicaoDto {
  @IsNumber()
  numeroRequisicao: number;

  @IsString()
  dataRequisicao: string;

  @IsString()
  solicitante: string;

  @IsNumber()
  idUsuarioInclusao: number;

  @IsString()
  dataHoraAtualInclusao: string;

  @IsString()
  dataHoraAtualEdicao: string;

  @IsNumber()
  idUsuarioEdicao: number;

  @IsString()
  observacao: string;

  @IsNumber()
  situacao: number;

  @IsString()
  descricao: string;

  @IsInt()
  tipo: number;

  @IsNumber()
  idUsuarioIncrusao: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProdutoRequisicaoDto)
  requisicaoProduto: CreateProdutoRequisicaoDto[];
}

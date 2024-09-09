import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProdutoRequisicaoDto {
  @IsNumber()
  @IsOptional()
  idRequisicaoAlmoxarifadoM: number;

  @IsNumber()
  @IsOptional()
  idProdutoAlmoxarifado: number;

  @IsString()
  descricaoProdutoSemCadastro: string;

  @IsString()
  und: string;

  @IsString()
  dataHoraAtualInclusao: string;

  @IsString()
  dataHoraAtualEdicao: string;

  @IsNumber()
  quantidade: number;

  @IsNumber()
  precoAtual: number;

  @IsNumber()
  custoMedioAtual: number;

  @IsString()
  observacoes: string;
}

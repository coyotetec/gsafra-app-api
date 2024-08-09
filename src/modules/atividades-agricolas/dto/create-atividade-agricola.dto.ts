import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { InsumoDto } from 'src/modules/atividades-agricolas-insumos/dto/create-atividade-agricola-insumo.dto';
import { MaquinaDto } from 'src/modules/atividades-agricolas-maquinas/dto/create-atividade-agricola-maquina.dto';
import { TalhaoSafraDto } from 'src/modules/atividades-agricolas-talhoes-safras/dto/create-atividade-agricola-talhao-safra.dto';

export class CreateAtividadeAgricolaDto {
  @IsString()
  idMobile: string;

  @IsNumber()
  idUsuario: number;

  @IsOptional()
  @IsNumber()
  idPlanAtv?: number;

  @IsNumber()
  idAgriFase: number;

  @IsOptional()
  @IsNumber()
  idTipoAtividade?: number;

  @IsOptional()
  @IsNumber()
  idEstacaoFenologico?: number;

  @IsNumber()
  idCicloProducao: number;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  dataInicio?: string;

  @IsOptional()
  @IsString()
  dataTermino?: string;

  @IsNumber()
  situacao: number;

  @IsNumber()
  totalArea: number;

  @IsNumber()
  totalAreaTrabalhada: number;

  @IsOptional()
  @IsString()
  obs?: string;

  @IsOptional()
  @IsNumber()
  idAgriTipoAplicacao?: number;

  @IsOptional()
  @IsNumber()
  idAgriAplicacaoFase?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsumoDto)
  insumos: InsumoDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MaquinaDto)
  maquinas: MaquinaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TalhaoSafraDto)
  talhoesSafras: TalhaoSafraDto[];
}

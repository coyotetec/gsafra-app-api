import { IsString } from 'class-validator';

export class CreateDispositivoDto {
  @IsString()
  name: string;

  @IsString()
  info: string;
}

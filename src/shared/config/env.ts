import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

class Env {
  @IsString()
  @IsNotEmpty()
  firebirdUser: string;

  @IsString()
  @IsNotEmpty()
  firebirdPassword: string;

  @IsString()
  @IsNotEmpty()
  jwtSecret: string;
}

export const env = plainToInstance(Env, {
  firebirdUser: process.env.FIREBIRD_USER,
  firebirdPassword: process.env.FIREBIRD_PASSWORD,
  jwtSecret: process.env.JWT_SECRET,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}

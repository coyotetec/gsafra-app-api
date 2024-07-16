import {
  ExecutionContext,
  UnauthorizedException,
  createParamDecorator,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { env } from '../config/env';

export type DBConnectionDataType = { host: string; code: string };

export const DBConnectionData = createParamDecorator<undefined>(
  (data, context: ExecutionContext): DBConnectionDataType => {
    try {
      const request = context.switchToHttp().getRequest();
      const authorization = request.headers.authorization;

      if (!authorization) {
        throw new UnauthorizedException(
          'Não foi possível autenticar sua empresa',
        );
      }

      const token = authorization.split(' ')[1];

      if (!token) {
        throw new UnauthorizedException(
          'Não foi possível autenticar sua empresa',
        );
      }
      const decoded = verify(token, env.jwtSecret) as {
        name: string;
        host: string;
        code: string;
      };

      return { host: decoded.host, code: decoded.code };
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException(
        'Não foi possível autenticar sua empresa',
      );
    }
  },
);

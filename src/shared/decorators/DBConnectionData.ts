import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export type DBConnectionDataType = { host: string; code: string };

export const DBConnectionData = createParamDecorator<undefined>(
  (data, context: ExecutionContext): DBConnectionDataType => {
    const request = context.switchToHttp().getRequest();

    return { host: request.query.host, code: request.query.code };
  },
);

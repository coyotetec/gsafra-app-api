import * as Firebird from 'node-firebird';
import { Injectable } from '@nestjs/common';
import { env } from 'src/shared/config/env';

@Injectable()
export class FirebirdService {
  query<D>(host: string, code: string, query: string, mapper: (raw: any) => D) {
    return new Promise<D[]>((resolve, reject) => {
      Firebird.attach(this.generateConfig(host, code), (attachError, db) => {
        if (attachError) {
          return reject(attachError);
        }

        db.query(query, [], (queryError, result) => {
          db.detach();

          if (queryError) {
            return reject(queryError);
          }

          resolve(result.map((row) => mapper(row)));
        });
      });
    });
  }

  private generateConfig(host: string, code: string): Firebird.Options {
    return {
      host,
      port: 3050,
      database: `C:\\Cyot\\BD\\${code}\\AGRO.FDB`,
      user: env.firebirdUser,
      password: env.firebirdPassword,
      lowercase_keys: false,
      pageSize: 4096,
    };
  }
}

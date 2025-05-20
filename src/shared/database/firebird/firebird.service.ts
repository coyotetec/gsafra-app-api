import * as Firebird from 'node-firebird';
import { Injectable } from '@nestjs/common';
import { env } from 'src/shared/config/env';

@Injectable()
export class FirebirdService {
  query<T>(
    host: string,
    code: string,
    query: string,
    mapper?: (raw: any) => T,
  ) {
    return new Promise<T[]>((resolve, reject) => {
      Firebird.attach(this.generateConfig(host, code), (attachError, db) => {
        if (attachError) {
          return reject(attachError);
        }

        db.query(query, [], (queryError, result) => {
          db.detach();

          if (queryError) {
            return reject(queryError);
          }

          if (mapper) {
            if (!Array.isArray(result)) {
              result = [result];
            }

            resolve(result.map((row) => mapper(row)));
          } else {
            resolve([]);
          }
        });
      });
    });
  }

  private generateConfig(host: string, code: string): Firebird.Options {
    return {
      host: 'localhost',
      port: 3050,
      // database: `C:\\Cyot\\BD\\${code}\\AGRO.FDB`,
      database: `//Library//Frameworks//Firebird.framework//Versions//A//Resources//examples//empbuild//${code}.FDB`,
      user: env.firebirdUser,
      password: env.firebirdPassword,
      lowercase_keys: false,
      pageSize: 4096,
      blobAsText: true,
    };
  }
}
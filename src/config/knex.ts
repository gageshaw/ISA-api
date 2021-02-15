import { Injectable } from '@nestjs/common';
import { KnexOptions } from '@nestjsplus/knex';

@Injectable()
export class KnexConfig {
  // This needs to be changed for every user and should
  // change during production, as well before deployment.
  createKnexOptions(): KnexOptions {
    return {
      client: 'postgresql',
      debug: true,
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'bris',
        database: 'postgres',
      },

      pool: { min: 2, max: 7 },
    };
  }
}

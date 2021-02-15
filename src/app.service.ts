// eslint-disable-next-line @typescript-eslint/no-var-requires
const OAuthClient = require('intuit-oauth');
import { Injectable, Inject, Logger } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class AppService {
  constructor() {}

  @Inject(KNEX_CONNECTION) private readonly knex;
  async getHello(): Promise<string> {
    const users = await this.knex('schedule').select();
    return JSON.stringify(users);
  }
}

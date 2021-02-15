import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QBConfigService {
  constructor(private configService: ConfigService) {}

  get client_id(): string {
    return this.configService.get<string>('qb.client_id');
  }
  get client_secret(): string {
    return this.configService.get<string>('qb.client_secret');
  }
  get redirect(): string {
    return this.configService.get<string>('qb.redirect_uri');
  }
  get environment(): string {
    return this.configService.get<string>('qb.environment');
  }
  get refresh(): string {
    return this.configService.get<string>('qb.refresh');
  }
  get access(): string {
    return this.configService.get<string>('qb.access');
  }
}

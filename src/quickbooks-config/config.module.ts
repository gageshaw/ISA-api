import { Module } from '@nestjs/common';
import configuration from './configuration';
import { QBConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      load: [configuration],
    }),
  ],
  providers: [ConfigService, QBConfigService],
  exports: [ConfigService, QBConfigService],
})
export class QBConfigModule {}

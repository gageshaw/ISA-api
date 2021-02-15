import { Module, OnModuleDestroy, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { KnexConfig } from './config/knex';
import { KnexModule } from '@nestjsplus/knex';
import { KNEX_CONNECTION } from '@nestjsplus/knex';
import { QBConfigModule } from './quickbooks-config/config.module';
import { UsersModule } from './users/users.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    QBConfigModule,
    KnexModule.registerAsync({
      useClass: KnexConfig,
    }),
    AppService,
    UsersModule,
    ScheduleModule,
    OrganizationsModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleDestroy {
  @Inject(KNEX_CONNECTION) private readonly knex;

  async onModuleDestroy() {
    await this.knex.destroy();
  }
}

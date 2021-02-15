import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const OAuthClient = require('intuit-oauth');

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
    private configService: ConfigService,
  ) {}

  // This creates a new OAuthClient for every request passed
  oAuthClient = new OAuthClient({
    clientId: this.configService.get('QB_CLIENT_ID'),
    clientSecret: this.configService.get('QB_CLIENT_SECRET'),
    environment: this.configService.get('QB_ENVIRONMENT'),
    redirectUri: this.configService.get('QB_REDIRECT_URI'),
    //token: 'S.18__a8d4ddbc765d5fab455e0f0c13afc3c46470a929'
  });

  // Tsheets integration looks slightly different.
  // If you need to use the Tsheets API via from the .env.local
  // Just fetch them as follows
  // this.configService.get("TS_CLIENT_ID")


  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    //console.log(this.oAuthClient);
    return  await this.employeesService.findAll(this.oAuthClient);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.employeesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}

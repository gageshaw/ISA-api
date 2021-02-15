import { Injectable, Inject } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class ScheduleService {
  @Inject(KNEX_CONNECTION) private readonly knex;

  async create(createScheduleDto: CreateScheduleDto) : Promise<string>{
    const newAppt =  await this.knex('schedule').insert(createScheduleDto).returning('id');
    return newAppt;
  }

  async findAll() : Promise<string> {
    const schedule = await this.knex('schedule').select();
    return schedule;
  }

  async findEid(uidPassed: string) : Promise<string>{
    const schedule = await this.knex('schedule').where({uid: uidPassed});
  return schedule;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  async update(updateID: number, updateScheduleDto: UpdateScheduleDto) {
    const updatedAppt = await this.knex('schedule').where({id: updateID}).update(updateScheduleDto);
    return updateID;
  }

  async remove(deletedID: number) : Promise<string>{
    const removedAppt = await this.knex('schedule').where({id: deletedID}).del();
    return removedAppt;
  }
}

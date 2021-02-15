import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class UsersService {
  @Inject(KNEX_CONNECTION) private readonly knex;

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() : Promise<string> {
    const users = await this.knex('users').select();
    return users;
  }

  async findOne(uidPassed: string) : Promise<string>{
    const user = await this.knex('users').where({uid: uidPassed});
    console.log(user);
    return user;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

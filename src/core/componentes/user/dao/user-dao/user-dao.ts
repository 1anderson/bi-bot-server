import { Injectable } from '@nestjs/common';
import { getManager } from "typeorm";
import { User } from '../../../../../entities/user';
@Injectable()
export class UserDao {
    createUser =  async (user: User) => await getManager().save(user);
}
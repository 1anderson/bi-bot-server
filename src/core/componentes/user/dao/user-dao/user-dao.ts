import { Injectable } from '@nestjs/common';
import { getManager } from "typeorm";
import { User } from '../../../../../entities/user';
import LoginDTO from '../../dto/login-dto';
@Injectable()
export class UserDao {
    createUser =  async (user: User) => await getManager().save(user);

    async updateStatusAccount(emailToken: string) {
        const user: User = await getManager().findOne( User, { where: { confirmEmailToken: emailToken } });
        user.activeAccount = true;
        return await getManager().save(user);
    }

    async login( loginData: LoginDTO ) {
        const loginResult = await getManager().findOne(User, {login: loginData.login})
    }

    async getUser(login) {
       return await getManager().findOne(User, {login: login})
    }
}
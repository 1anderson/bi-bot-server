import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/user-dao/user-dao';
import { User } from '../../../../../entities/user';
import { PasswordService } from '../../../../services/password/password.service';


@Injectable()
export class UserService {
    constructor(private readonly userDao: UserDao, private readonly passwordService: PasswordService){}
    async createUser( user: User ) {
        user.password = await this.passwordService.generatedHash(user.password, 10);
        return await this.userDao.createUser(user);
    }

}

import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/user-dao/user-dao';
import { User } from '../../../../../entities/user';
import { PasswordService } from '../../../../services/password/password.service';
import { EmailService } from 'src/core/services/email/email.service';


@Injectable()
export class UserService {
    constructor(private readonly userDao: UserDao, private readonly passwordService: PasswordService, private readonly emailService: EmailService){}
    async createUser( user: User ) {
        user.password = await this.passwordService.generatedHash(user.password, 10);
        const emailUserToken = await this.passwordService.generatedHash(user.email, 10);
        user.confirmEmailToken = emailUserToken;
        const userCreated =  await this.userDao.createUser(user);
        this.emailService.sendAuthorizationEmail(emailUserToken, userCreated.email);
        return userCreated;
    }

    async updateStatusAccount(token: string){
        
    }

}

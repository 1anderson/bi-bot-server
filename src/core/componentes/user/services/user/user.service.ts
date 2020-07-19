import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/user-dao/user-dao';
import { User } from '../../../../../entities/user';
import { PasswordService } from '../../../../services/password/password.service';
import { EmailService } from 'src/core/services/email/email.service';
import { ExceptionServiceService } from 'src/core/services/exception-service/exception-service.service';
import ViewUserDTO from '../../dto/view-user-dto';
import { ClassTransformService } from 'src/core/services/class-transform/class-transform.service';


@Injectable()
export class UserService {
    constructor(private readonly userDao: UserDao, private readonly passwordService: PasswordService, private readonly emailService: EmailService , private readonly exceptionServiceService: ExceptionServiceService, private classTransformService: ClassTransformService){}
    async createUser( user: User ) {
        user.password = await this.passwordService.generatedHash(user.password, 10);
        const emailUserToken = await this.passwordService.generatedHash(user.email, 10);
        user.confirmEmailToken = emailUserToken;
        const userCreated =  await this.userDao.createUser(user);
        this.emailService.sendAuthorizationEmail(emailUserToken, userCreated.email);
        return userCreated;
    }

    async updateStatusAccount(token: string){
        return await this.userDao.updateStatusAccount(token);
    }

    passwordIsEqual = async (password: string, user: User): Promise<boolean> => await this.passwordService.comparingPasswordHash(password, user.password );
       
    getUserByLogin = async (login: string ) => await this.userDao.getUser(login);

    isUserIsActive = (user: User): boolean => user.activeAccount;

    mapUserToView(user: User): ViewUserDTO {
        return this.classTransformService.getEntity(ViewUserDTO, user);
    };

}

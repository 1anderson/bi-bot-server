import { Injectable } from '@nestjs/common';
import { UserDao } from '../../dao/user-dao/user-dao';
import { User } from '../../../../../entities/user';
import { PasswordService } from '../../../../services/password/password.service';
import { EmailService } from 'src/core/services/email/email.service';
import LoginDTO from '../../dto/login-dto';
import { ExceptionServiceService } from 'src/core/services/exception-service/exception-service.service';
import ViewUserDTO from '../../dto/view-user-dto';


@Injectable()
export class UserService {
    constructor(private readonly userDao: UserDao, private readonly passwordService: PasswordService, private readonly emailService: EmailService , private readonly exceptionServiceService: ExceptionServiceService){}
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

    async login(loginData: LoginDTO): Promise<ViewUserDTO> {
        const user = await this.getUserByLogin(loginData); 
        if(user && await this.passwordIsEqual(loginData, user)) {
          if(this.isUserIsActive(user) ) {
              return this.mapUserToView(user)
          } else {
              this.exceptionServiceService.accountNotActive(); 
          }
        } else {
          this.exceptionServiceService.invalidCredentials();
        }
    }
    
    passwordIsEqual = async (loginData: LoginDTO, user: User): Promise<boolean> => await this.passwordService.comparingPasswordHash(loginData.password, user.password );
       
    getUserByLogin = async (loginData :LoginDTO ) => await this.userDao.getUser(loginData.login);

    isUserIsActive = (user: User): boolean => user.activeAccount;

    mapUserToView = (user: User): ViewUserDTO => new ViewUserDTO('',1,'');

}

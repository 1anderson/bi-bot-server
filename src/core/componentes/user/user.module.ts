import { Module } from '@nestjs/common';
import { UserController } from './controller/user-controller';
import { UserService } from './services/user/user.service';
import { UserDao } from './dao/user-dao/user-dao';
import { PasswordService } from '.././../services/password/password.service';
import { ClassTransformService } from '../../services/class-transform/class-transform.service';
import { EmailService } from 'src/core/services/email/email.service';
import { ExceptionServiceService } from 'src/core/services/exception-service/exception-service.service';
import { AuthService } from '../../services/auth-service/auth-service';
@Module({
    imports: [PasswordService, AuthService],
    controllers: [ UserController ],
    providers: [ UserService, UserDao, PasswordService, ClassTransformService, EmailService, ExceptionServiceService, AuthService],
  })

  export class UserModule {}

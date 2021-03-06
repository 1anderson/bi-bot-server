import { Module } from '@nestjs/common';
import { UserController } from './controller/user-controller';
import { UserService } from './services/user/user.service';
import { UserDao } from './dao/user-dao/user-dao';
import { PasswordService } from '.././../services/password/password.service';
import { ClassTransformService } from '../../services/class-transform/class-transform.service';
import { EmailService } from 'src/core/services/email/email.service';

@Module({
    imports: [PasswordService],
    controllers: [ UserController ],
    providers: [ UserService, UserDao, PasswordService, ClassTransformService, EmailService ],
  })

  export class UserModule {}

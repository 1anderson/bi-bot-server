import { Module } from '@nestjs/common';
import { UserController } from './controller/user-controller';
import { UserService } from './services/user/user.service';
import { UserDao } from './dao/user-dao/user-dao';

import { CoreModule } from 'src/core/core.module';
import { AuthModule } from 'src/core/auth/auth.module';
@Module({
    imports: [CoreModule, AuthModule],
    controllers: [ UserController ],
    providers: [ UserService, UserDao],
    exports: [UserService, UserDao]
  })

  export class UserModule {}

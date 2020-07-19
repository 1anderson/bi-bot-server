import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth-service';
import { LocalStrategy } from './LocalStrategy ';
import { UserService } from 'src/core/componentes/user/services/user/user.service';
import { CoreModule } from 'src/core/core.module';
import { UserDao } from 'src/core/componentes/user/dao/user-dao/user-dao';
import { JwtStrategy } from './jwt.strategy';
require("dotenv-safe").config({
  path: './enviroments/.env',
  example: './enviroments/.env.example'
});

@Module({
    imports: [CoreModule , JwtModule.register({ secret: process.env.SECRET, signOptions: { expiresIn: '3h' }}) ],
    providers: [ LocalStrategy, AuthService,  UserService, UserDao , JwtStrategy],
    exports: [ AuthService ]
  })

  export class AuthModule {}

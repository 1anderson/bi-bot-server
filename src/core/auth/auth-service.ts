import { Injectable } from '@nestjs/common';
import jwt = require('jsonwebtoken');
import { UserService } from 'src/core/componentes/user/services/user/user.service';
import { ExceptionServiceService } from '../services/exception-service/exception-service.service';
import { JwtService } from '@nestjs/jwt';
import ViewUserDTO from 'src/core/componentes/user/dto/view-user-dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly exceptionServiceService: ExceptionServiceService, private jwtService: JwtService) {}
    
  createToken = (key: string, secret: string) => jwt.sign({
        data: key
  }, secret , { expiresIn: '3h' }); 

  async validateUser(username: string, password: string): Promise<ViewUserDTO> {
    const user = await this.userService.getUserByLogin(username);
    console.log(user,password, await this.userService.passwordIsEqual(password, user)) 
    if(user && await this.userService.passwordIsEqual(password, user)) {
      if(this.userService.isUserIsActive(user) ) {
           return this.userService.mapUserToView(user)
      } else {
          this.exceptionServiceService.accountNotActive(); 
      }
      } else {
        this.exceptionServiceService.invalidCredentials();
      }
  }

  async login(user: ViewUserDTO) {
    const payload = { user: user };
    console.log(process.env.SECRET)

    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }
}

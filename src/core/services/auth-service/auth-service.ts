import { Injectable } from '@nestjs/common';
import jwt = require('jsonwebtoken');
@Injectable()
export class AuthService {
    createToken = (key: string, secret: string) => jwt.sign({
        data: key
      }, secret , { expiresIn: '3h' }); 
}

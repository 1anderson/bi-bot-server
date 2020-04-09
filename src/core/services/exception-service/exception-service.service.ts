import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExceptionServiceService {

    invalidCredentials() {
        throw new HttpException('invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    accountNotActive() {
        throw new HttpException('Account not active, please active your account', HttpStatus.UNAUTHORIZED);
    }


}

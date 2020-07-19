import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExceptionServiceService {

    invalidCredentials() {
        throw new HttpException('invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    accountNotActive() {
        throw new HttpException('Account not active, please active your account', HttpStatus.UNAUTHORIZED);
    }

    unauthorized() {
        throw new HttpException('user don’t have permission to access this resource', HttpStatus.FORBIDDEN);
    }


}

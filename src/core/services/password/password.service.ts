import { Injectable } from '@nestjs/common';
import bcrypt = require('bcryptjs');

@Injectable()
export class PasswordService {

    generatedHash(password, salt) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(salt, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    resolve(hash);
                });
            });
        });
    }

    comparingPasswordHash(hashOne, hashTwo) {
        return bcrypt.compare(hashOne, hashTwo);
    }
}

import { Injectable } from '@nestjs/common';
import bcrypt = require('bcryptjs');

@Injectable()
export class PasswordService {

    async generatedHash(password, salt: any) {
        const SaltGenerate = await bcrypt.genSaltSync(salt);
        return await bcrypt.hashSync(password, SaltGenerate);
    }

    comparingPasswordHash = async (hashOne, hashTwo) => await bcrypt.compare(hashOne, hashTwo);
}


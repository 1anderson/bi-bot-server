import { Injectable } from '@nestjs/common';
import { createConnection } from "typeorm";

@Injectable()
export class DatabaseService {
    async initDatabaseConnection() {
        await createConnection();
    }

}

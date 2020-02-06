import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from "typeorm";

@Injectable()
export class DatabaseService {
    async initDatabaseConnection() {
        await createConnection();
    }

}

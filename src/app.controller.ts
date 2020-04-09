import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './core/services/database/database.service';

@Controller()
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}

  onApplicationBootstrap() {
    //this.databaseService.initDatabaseConnection();
  }

}

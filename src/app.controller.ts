import { Controller, Get, OnApplicationBootstrap, OnModuleInit  } from '@nestjs/common';
import { DatabaseService } from './core/services/database/database.service';

@Controller()
export class AppController implements OnApplicationBootstrap {
  constructor(private readonly databaseService: DatabaseService) {}
  
  onApplicationBootstrap() {
    this.databaseService.initDatabaseConnection();
  }

}

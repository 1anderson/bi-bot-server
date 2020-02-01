import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './core/componentes/user/controller/user-controller';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

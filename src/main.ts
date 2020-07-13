import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require("dotenv-safe").config({
  path: './enviroments/.env',
  example: './enviroments/.env.example'
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

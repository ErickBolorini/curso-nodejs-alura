/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3001);
  const port = 3001;
  app.listen(port, ()=> console.log(`servidor está rodando na porta ${port}`))
}
bootstrap();

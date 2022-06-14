import { Livro } from './livro.model';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'alura',
        password: '123',
        database: 'livraria',
        autoLoadModels: true
      }),   
      SequelizeModule.forFeature([Livro])
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}

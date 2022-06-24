import { Livro } from './livro/livro.model';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    LivroModule,
    ConfigModule.forRoot(),
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.USUARIO_BANCO_DADOS,
        password: process.env.SENHA_BANCO_DADOS,
        database: 'livraria',
        autoLoadModels: true
      }),      
],
  controllers: [],
  providers: [],
})
export class AppModule {}

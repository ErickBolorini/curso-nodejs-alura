/* eslint-disable prettier/prettier */
import { ProdutosService } from './services/produtos.service';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ProdutosController } from './controllers/produtos.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}

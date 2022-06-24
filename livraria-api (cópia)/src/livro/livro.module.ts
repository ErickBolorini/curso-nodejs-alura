import { Module } from "@nestjs/common";
import { Livro } from "src/livro/livro.model";
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { LivrosController } from "./livros.controller";
import { LivrosService } from "./livros.service";

@Module({
    imports: [SequelizeModule.forFeature([Livro])],
    controllers: [LivrosController],
    providers: [LivrosService]
})
export class LivroModule {}
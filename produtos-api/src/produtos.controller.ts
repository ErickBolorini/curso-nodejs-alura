/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model'

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDDe BDD na prática", 29.90),
        new Produto("LIV02", "Livro iniciando em Flutter", 39.90),
        new Produto("LIV03", "Livro em java", 49.90)
    ];

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto: Produto){
        console.log(produto);
        return 'Produto criado';
    }

    @Put()
    alterar(@Body() produto): string{
        console.log(produto);
        return 'Produto atualizado';
    }

    @Delete(':id')
    apagar(@Param() params): string{
        return `Apaga o produto ${params.id}`
    }
}
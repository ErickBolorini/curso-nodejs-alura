import { ProdutosService } from '../services/produtos.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from '../models/produto.model'

@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() produto: Produto) {
        this.produtosService.criar(produto);
    }

    @Put()
    alterar(@Body() produto: Produto){
        this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param() params){
        this.produtosService.apagar(params.id);
    }
}
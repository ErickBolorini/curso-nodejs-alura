/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Produto } from '../models/produto.model';

@Injectable()
export class ProdutosService{
    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDDe BDD na prática", 29.90),
        new Produto("LIV02", "Livro iniciando em Flutter", 39.90),
        new Produto("LIV03", "Livro em java", 49.90)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto){
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto{
        return produto;
    }

    apagar(id: number){
        this.produtos.pop();
    }
}
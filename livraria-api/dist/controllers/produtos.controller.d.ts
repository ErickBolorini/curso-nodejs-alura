import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model';
export declare class ProdutosController {
    private produtosService;
    constructor(produtosService: ProdutosService);
    obterTodos(): Produto[];
    obterUm(params: any): Produto;
    criar(produto: Produto): void;
    alterar(produto: Produto): void;
    apagar(params: any): void;
}

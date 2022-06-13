import { Produto } from './produto.model';
export declare class ProdutosController {
    produtos: Produto[];
    obterTodos(): Produto[];
    obterUm(params: any): Produto;
    criar(produto: Produto): string;
    alterar(produto: any): string;
    apagar(params: any): string;
}

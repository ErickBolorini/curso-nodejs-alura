import { Livro } from './livro.model';
import { LivrosService } from "./livros.service";
export declare class LivrosController {
    private livrosService;
    constructor(livrosService: LivrosService);
    obterTodos(): Livro[];
    obterUm(params: any): Livro;
    criar(livro: Livro): void;
    alterar(livro: Livro): Livro;
    apagar(params: any): void;
}

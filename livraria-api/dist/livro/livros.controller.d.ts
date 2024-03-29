import { Livro } from './livro.model';
import { LivrosService } from "./livros.service";
export declare class LivrosController {
    private livrosService;
    constructor(livrosService: LivrosService);
    obterTodos(): Promise<Livro[]>;
    obterUm(params: any): Promise<Livro>;
    criar(livro: Livro): Promise<void>;
    alterar(livro: Livro): Promise<Livro>;
    apagar(params: any): Promise<void>;
}

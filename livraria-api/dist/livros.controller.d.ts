import { Livro } from './livro.model';
import { LivrosService } from "./livro/livros.service";
export declare class LivrosController {
    private livrosService;
    constructor(livrosService: LivrosService);
    obterTodos(): Promise<Livro[]>;
    obterUm(params: any): Promise<Livro>;
    criar(livro: Livro): Promise<void>;
    alterar(livro: Livro): Promise<any>;
    apagar(params: any): Promise<void>;
}

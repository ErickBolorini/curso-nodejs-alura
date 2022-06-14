import { Livro } from "./livro.model";
export declare class LivrosService {
    private livroModel;
    constructor(livroModel: typeof Livro);
    obterTodos(): Promise<Livro[]>;
    obterUm(id: number): Promise<Livro>;
    criar(livro: Livro): void;
    alterar(livro: Livro): Livro;
    apagar(id: number): void;
}

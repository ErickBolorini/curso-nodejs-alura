import { Controller, Get } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
        return "Listar todos os produtos";
    }
    @Get(':id')
    obterUm(): string{
        return "Retorna os dados do produto ${}";
    }

}
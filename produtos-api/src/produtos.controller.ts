import { Controller, Param } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
        return 'Listar todos os produtos';
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`;
    }

}
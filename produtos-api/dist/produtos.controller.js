"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produto_model_1 = require("./produto.model");
let ProdutosController = class ProdutosController {
    constructor() {
        this.produtos = [
            new produto_model_1.Produto("LIV01", "Livro TDDe BDD na prática", 29.90),
            new produto_model_1.Produto("LIV02", "Livro iniciando em Flutter", 39.90),
            new produto_model_1.Produto("LIV03", "Livro em java", 49.90)
        ];
    }
    obterTodos() {
        return this.produtos;
    }
    obterUm(params) {
        return this.produtos[0];
    }
    criar(produto) {
        console.log(produto);
        return 'Produto criado';
    }
    alterar(produto) {
        console.log(produto);
        return 'Produto atualizado';
    }
    apagar(params) {
        return `Apaga o produto ${params.id}`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProdutosController.prototype, "obterTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", produto_model_1.Produto)
], ProdutosController.prototype, "obterUm", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_model_1.Produto]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "alterar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ProdutosController.prototype, "apagar", null);
ProdutosController = __decorate([
    (0, common_1.Controller)('produtos')
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map
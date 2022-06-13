"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProdutosService = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var produto_model_1 = require("../models/produto.model");
var ProdutosService = /** @class */ (function () {
    function ProdutosService() {
        this.produtos = [
            new produto_model_1.Produto("LIV01", "Livro TDDe BDD na prática", 29.90),
            new produto_model_1.Produto("LIV02", "Livro iniciando em Flutter", 39.90),
            new produto_model_1.Produto("LIV03", "Livro em java", 49.90)
        ];
    }
    ProdutosService.prototype.obterTodos = function () {
        return this.produtos;
    };
    ProdutosService.prototype.obterUm = function (id) {
        return this.produtos[0];
    };
    ProdutosService.prototype.criar = function (produto) {
        this.produtos.push(produto);
    };
    ProdutosService.prototype.alterar = function (produto) {
        return produto;
    };
    ProdutosService.prototype.apagar = function (id) {
        this.produtos.pop();
    };
    ProdutosService = __decorate([
        (0, common_1.Injectable)()
    ], ProdutosService);
    return ProdutosService;
}());
exports.ProdutosService = ProdutosService;

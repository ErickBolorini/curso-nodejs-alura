"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroModule = void 0;
const common_1 = require("@nestjs/common");
const livro_model_1 = require("./livro.model");
const sequelize_module_1 = require("@nestjs/sequelize/dist/sequelize.module");
const livros_controller_1 = require("./livros.controller");
const livros_service_1 = require("./livros.service");
let LivroModule = class LivroModule {
};
LivroModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_module_1.SequelizeModule.forFeature([livro_model_1.Livro])],
        controllers: [livros_controller_1.LivrosController],
        providers: [livros_service_1.LivrosService]
    })
], LivroModule);
exports.LivroModule = LivroModule;
//# sourceMappingURL=livro.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const livro_model_1 = require("./livro.model");
const sequelize_module_1 = require("@nestjs/sequelize/dist/sequelize.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const livros_controller_1 = require("./livros.controller");
const livros_service_1 = require("./livros.service");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            sequelize_module_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: process.env.USUARIO_BANCO_DADOS,
                password: process.env.SENHA_BANCO_DADOS,
                database: 'livraria',
                autoLoadModels: true
            }),
            sequelize_module_1.SequelizeModule.forFeature([livro_model_1.Livro])
        ],
        controllers: [app_controller_1.AppController, livros_controller_1.LivrosController],
        providers: [app_service_1.AppService, livros_service_1.LivrosService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
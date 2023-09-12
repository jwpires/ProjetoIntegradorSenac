"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const agencia_module_1 = require("./agencia/agencia.module");
const auth_module_1 = require("./auth/auth.module");
const banco_module_1 = require("./Banco/banco.module");
const grupoDespesa_module_1 = require("./GrupoDeDespesa/grupoDespesa.module");
const despesa_module_1 = require("./LancamentoDespesa/despesa.module");
const produto_module_1 = require("./Produto/produto.module");
const relatorios_module_1 = require("./relatorios/relatorios.module");
const usuario_module_1 = require("./usuario/usuario.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuario_module_1.UsuarioModule,
            produto_module_1.ProdutoModule,
            banco_module_1.BancoModule,
            agencia_module_1.AgenciaModule,
            despesa_module_1.DespesaModule,
            grupoDespesa_module_1.GrupoDespesaModule,
            relatorios_module_1.RelatorioModule,
            auth_module_1.AuthModule,
            usuario_module_1.UsuarioModule,
            axios_1.HttpModule
        ],
        controllers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
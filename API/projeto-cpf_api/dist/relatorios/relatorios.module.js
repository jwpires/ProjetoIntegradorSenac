"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioModule = void 0;
const common_1 = require("@nestjs/common");
const agencia_providers_1 = require("../agencia/agencia.providers");
const database_module_1 = require("../database/database.module");
const despesa_providers_1 = require("../LancamentoDespesa/despesa.providers");
const relatorioDespesaDash_service_1 = require("./relatorioDespesaDash.service");
const relatorios_controller_1 = require("./relatorios.controller");
const relatorioSaldoDash_service_1 = require("./relatorioSaldoDash.service");
let RelatorioModule = class RelatorioModule {
};
RelatorioModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [relatorios_controller_1.RelatoriosController],
        providers: [
            ...despesa_providers_1.despesaProviders,
            ...agencia_providers_1.agenciaProviders,
            relatorioDespesaDash_service_1.RelatorioDespesaDashService,
            relatorioSaldoDash_service_1.RelatorioSaldoDashService,
        ]
    })
], RelatorioModule);
exports.RelatorioModule = RelatorioModule;
//# sourceMappingURL=relatorios.module.js.map
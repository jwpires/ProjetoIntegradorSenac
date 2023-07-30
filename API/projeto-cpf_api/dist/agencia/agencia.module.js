"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenciaModule = void 0;
const common_1 = require("@nestjs/common");
const banco_providers_1 = require("../Banco/banco.providers");
const banco_service_1 = require("../Banco/banco.service");
const database_module_1 = require("../database/database.module");
const agencia_controller_1 = require("./agencia.controller");
const agencia_providers_1 = require("./agencia.providers");
const agencia_service_1 = require("./agencia.service");
let AgenciaModule = class AgenciaModule {
};
AgenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [agencia_controller_1.AgenciaController],
        providers: [
            ...agencia_providers_1.agenciaProviders,
            ...banco_providers_1.bancoProviders,
            agencia_service_1.AgenciaService, banco_service_1.BancoService
        ]
    })
], AgenciaModule);
exports.AgenciaModule = AgenciaModule;
//# sourceMappingURL=agencia.module.js.map
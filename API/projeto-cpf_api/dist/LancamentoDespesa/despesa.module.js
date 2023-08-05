"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const grupoDespesa_entity_1 = require("../GrupoDeDespesa/grupoDespesa.entity");
const grupoDespesa_providers_1 = require("../GrupoDeDespesa/grupoDespesa.providers");
const despesa_controller_1 = require("./despesa.controller");
const despesa_dm_1 = require("./despesa.dm");
const despesa_providers_1 = require("./despesa.providers");
let DespesaModule = class DespesaModule {
};
DespesaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [despesa_controller_1.DespesaController],
        providers: [
            ...despesa_providers_1.despesaProviders,
            ...grupoDespesa_providers_1.grupoDespesaProviders,
            despesa_dm_1.DespesasArmazenadas,
            grupoDespesa_entity_1.GrupoDespesa
        ]
    })
], DespesaModule);
exports.DespesaModule = DespesaModule;
//# sourceMappingURL=despesa.module.js.map
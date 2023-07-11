"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoDespesaModule = void 0;
const common_1 = require("@nestjs/common");
const grupoDespesa_controller_1 = require("./grupoDespesa.controller");
const grupoDespesa_dm_1 = require("./grupoDespesa.dm");
let GrupoDespesaModule = class GrupoDespesaModule {
};
GrupoDespesaModule = __decorate([
    (0, common_1.Module)({
        controllers: [grupoDespesa_controller_1.GrupoDespesaController],
        providers: [grupoDespesa_dm_1.ArmazenaGrupoDespesa]
    })
], GrupoDespesaModule);
exports.GrupoDespesaModule = GrupoDespesaModule;
//# sourceMappingURL=grupoDespesa.module.js.map
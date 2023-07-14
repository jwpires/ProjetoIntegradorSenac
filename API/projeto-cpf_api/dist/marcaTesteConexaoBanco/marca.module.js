"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const marca_controller_1 = require("./marca.controller");
const marca_providers_1 = require("./marca.providers");
const marca_service_1 = require("./marca.service");
let MarcaModule = class MarcaModule {
};
MarcaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [marca_controller_1.MarcaController],
        providers: [
            ...marca_providers_1.marcaProviders,
            marca_service_1.MarcaService,
        ],
    })
], MarcaModule);
exports.MarcaModule = MarcaModule;
//# sourceMappingURL=marca.module.js.map
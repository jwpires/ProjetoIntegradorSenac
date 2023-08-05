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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioDespesaController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const relatorioDepesa_dm_1 = require("./relatorioDepesa.dm");
let RelatorioDespesaController = class RelatorioDespesaController {
    constructor(relatorio) {
        this.relatorio = relatorio;
    }
    async ExibirRelatorio() {
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelatorioDespesaController.prototype, "ExibirRelatorio", null);
RelatorioDespesaController = __decorate([
    (0, common_2.Controller)('/relatorioDespesa'),
    __metadata("design:paramtypes", [typeof (_a = typeof relatorioDepesa_dm_1.RelatorioDespesa !== "undefined" && relatorioDepesa_dm_1.RelatorioDespesa) === "function" ? _a : Object])
], RelatorioDespesaController);
exports.RelatorioDespesaController = RelatorioDespesaController;
//# sourceMappingURL=relatorioDespesa.controller.js.map
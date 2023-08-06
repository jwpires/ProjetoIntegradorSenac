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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatoriosController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const relatorioDespesaDash_service_1 = require("./relatorioDespesaDash.service");
const relatorioSaldoDash_service_1 = require("./relatorioSaldoDash.service");
let RelatoriosController = class RelatoriosController {
    constructor(relatorioDashService, relatorioSaldoServide) {
        this.relatorioDashService = relatorioDashService;
        this.relatorioSaldoServide = relatorioSaldoServide;
    }
    async RetornaListaDespesaDash() {
        const relatorios = this.relatorioDashService.listar();
        const retornoRelatorioDash = (await relatorios).filter(item => item.pago === false);
        return retornoRelatorioDash;
    }
    async RetornaSaldosDash() {
        return this.relatorioSaldoServide.listar();
    }
};
__decorate([
    (0, common_1.Get)('/despesa-dash'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "RetornaListaDespesaDash", null);
__decorate([
    (0, common_1.Get)('/saldo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "RetornaSaldosDash", null);
RelatoriosController = __decorate([
    (0, common_2.Controller)('/relatorios'),
    __metadata("design:paramtypes", [relatorioDespesaDash_service_1.RelatorioDespesaDashService,
        relatorioSaldoDash_service_1.RelatorioSaldoDashService])
], RelatoriosController);
exports.RelatoriosController = RelatoriosController;
//# sourceMappingURL=relatorios.controller.js.map
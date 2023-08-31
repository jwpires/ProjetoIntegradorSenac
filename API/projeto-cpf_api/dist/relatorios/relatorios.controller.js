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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatoriosController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const relatorioDespesa_service_1 = require("./relatorioDespesa.service");
const relatorioSaldo_service_1 = require("./relatorioSaldo.service");
let RelatoriosController = class RelatoriosController {
    constructor(relatorioService, relatorioSaldoServide) {
        this.relatorioService = relatorioService;
        this.relatorioSaldoServide = relatorioSaldoServide;
    }
    async RetornaListaDespesaDash() {
        const relatorios = this.relatorioService.listar();
        const retornoRelatorioDash = (await relatorios).filter(item => item.pago === false);
        return retornoRelatorioDash;
    }
    async RetornaSaldosDash() {
        return this.relatorioSaldoServide.listarRelatorioSaldo();
    }
    async RetornaListaDespesaEmAberto() {
        const relatorios = this.relatorioService.listarRelatorioDespesa();
        const retornoDespesaEmAberto = (await relatorios).filter(item => item.pago == false);
        return retornoDespesaEmAberto;
    }
    async RetornaListaDespesaPagas() {
        const relatorios = this.relatorioService.listarRelatorioDespesa();
        const retornoDespesaPaga = (await relatorios).filter(item => item.pago == true);
        return retornoDespesaPaga;
    }
    async alteraStatusPagamento(id) {
        return await this.relatorioService.alterarStatusPagametoDespesa(id);
    }
    async alteraSaldo(id, saldo) {
        return await this.relatorioSaldoServide.alterarSaldo(id, saldo);
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
__decorate([
    (0, common_1.Get)('/despesas-em-aberto'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "RetornaListaDespesaEmAberto", null);
__decorate([
    (0, common_1.Get)('/despesas-pagas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "RetornaListaDespesaPagas", null);
__decorate([
    (0, decorators_1.Put)('alterar-:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "alteraStatusPagamento", null);
__decorate([
    (0, decorators_1.Put)('alterarSaldo-:id-valor-:saldo'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Param)('saldo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RelatoriosController.prototype, "alteraSaldo", null);
RelatoriosController = __decorate([
    (0, common_2.Controller)('/relatorios'),
    __metadata("design:paramtypes", [relatorioDespesa_service_1.RelatorioDespesaService,
        relatorioSaldo_service_1.RelatorioSaldoService])
], RelatoriosController);
exports.RelatoriosController = RelatoriosController;
//# sourceMappingURL=relatorios.controller.js.map
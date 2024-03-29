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
var _a, _b, _c, _d, _e, _f;
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
    async RetornaSaldosDash(banco = undefined, descricao = undefined) {
        if (banco == 'undefined' && descricao == 'undefined') {
            return this.relatorioSaldoServide.listarRelatorioSaldo(undefined, undefined);
        }
        else {
            if (banco == 'undefined') {
                return this.relatorioSaldoServide.listarRelatorioSaldo(undefined, descricao);
            }
            else {
                if (descricao == 'undefined') {
                    return this.relatorioSaldoServide.listarRelatorioSaldo(banco, undefined);
                }
                else {
                    return this.relatorioSaldoServide.listarRelatorioSaldo(banco, descricao);
                }
            }
        }
    }
    async RetornaListaDespesaEmAberto(datainicio, datafim, tipo, pago, gdespesa, descricao) {
        if (gdespesa != 'undefined' && descricao != 'undefined') {
            return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, gdespesa, descricao);
        }
        else {
            if (gdespesa == 'undefined') {
                return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, undefined, descricao);
            }
            else {
                if (descricao == 'undefined') {
                    return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, gdespesa, undefined);
                }
                else {
                    return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, undefined, undefined);
                }
            }
        }
    }
    async RetornaListaDespesaPagas(datainicio, datafim, tipo, pago, gdespesa, descricao) {
        if (gdespesa !== "undefined" && descricao !== "undefined") {
            return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, gdespesa, descricao);
        }
        else {
            if (gdespesa == "undefined") {
                return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, undefined, descricao);
            }
            else {
                if (descricao == "undefined") {
                    return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, gdespesa, undefined);
                }
                else {
                    return await this.relatorioService.listarRelatorioDespesa(datainicio, datafim, tipo, pago, undefined, undefined);
                }
            }
        }
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
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], RelatoriosController.prototype, "RetornaListaDespesaDash", null);
__decorate([
    (0, common_1.Get)('/saldo/:banco?/:descricao?'),
    __param(0, (0, decorators_1.Param)('banco')),
    __param(1, (0, decorators_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], RelatoriosController.prototype, "RetornaSaldosDash", null);
__decorate([
    (0, common_1.Get)('/despesas-em-aberto/:datainicio?/:datafim?/:tipo/:pago?/:gdespesa?/:descricao?'),
    __param(0, (0, decorators_1.Param)('datainicio')),
    __param(1, (0, decorators_1.Param)('datafim')),
    __param(2, (0, decorators_1.Param)('tipo')),
    __param(3, (0, decorators_1.Param)('pago')),
    __param(4, (0, decorators_1.Param)('gdespesa')),
    __param(5, (0, decorators_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], RelatoriosController.prototype, "RetornaListaDespesaEmAberto", null);
__decorate([
    (0, common_1.Get)('/despesas-pagas/:datainicio?/:datafim?/:tipo?/:pago?/:gdespesa?/:descricao?'),
    __param(0, (0, decorators_1.Param)('datainicio')),
    __param(1, (0, decorators_1.Param)('datafim')),
    __param(2, (0, decorators_1.Param)('tipo')),
    __param(3, (0, decorators_1.Param)('pago')),
    __param(4, (0, decorators_1.Param)('gdespesa')),
    __param(5, (0, decorators_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], RelatoriosController.prototype, "RetornaListaDespesaPagas", null);
__decorate([
    (0, decorators_1.Put)('alterar-:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], RelatoriosController.prototype, "alteraStatusPagamento", null);
__decorate([
    (0, decorators_1.Put)('alterarSaldo-:id-valor-:saldo'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Param)('saldo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], RelatoriosController.prototype, "alteraSaldo", null);
RelatoriosController = __decorate([
    (0, common_2.Controller)('/relatorios'),
    __metadata("design:paramtypes", [relatorioDespesa_service_1.RelatorioDespesaService,
        relatorioSaldo_service_1.RelatorioSaldoService])
], RelatoriosController);
exports.RelatoriosController = RelatoriosController;
//# sourceMappingURL=relatorios.controller.js.map
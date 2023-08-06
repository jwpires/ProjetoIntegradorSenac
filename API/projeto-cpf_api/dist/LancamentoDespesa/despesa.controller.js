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
exports.DespesaController = void 0;
const common_1 = require("@nestjs/common");
const despesa_entity_1 = require("./despesa.entity");
const inserirDespesa_dto_1 = require("./dto/inserirDespesa.dto");
const uuid_1 = require("uuid");
const despesa_service_1 = require("./despesa.service");
const grupoDespesa_service_1 = require("../GrupoDeDespesa/grupoDespesa.service");
let DespesaController = class DespesaController {
    constructor(despesaService, grupoDespesaService) {
        this.despesaService = despesaService;
        this.grupoDespesaService = grupoDespesaService;
    }
    async RetornoDespesas() {
        return this.despesaService.listar();
    }
    async CriarDespesa(dadosDespesa) {
        let retornoDespesa;
        try {
            const grupoDespesa = await this.grupoDespesaService.buscarGrupoDespesaPorId(dadosDespesa.id_GrupoDespesa);
            const despesa = new despesa_entity_1.Despesa((0, uuid_1.v4)(), dadosDespesa.descricao, grupoDespesa, dadosDespesa.dataLancamento, dadosDespesa.dataVencimento, dadosDespesa.valor, dadosDespesa.pago);
            await this.despesaService.inserirDespesa(despesa);
            retornoDespesa = {
                dadosDespesa,
                message: "Despesa Cadastrada!"
            };
        }
        catch (error) {
            retornoDespesa = {
                error: "Erro ao cadastrar Despesa"
            };
        }
        return retornoDespesa;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DespesaController.prototype, "RetornoDespesas", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inserirDespesa_dto_1.InserirDespesaDTO]),
    __metadata("design:returntype", Promise)
], DespesaController.prototype, "CriarDespesa", null);
DespesaController = __decorate([
    (0, common_1.Controller)('/lancamentoDespesa'),
    __metadata("design:paramtypes", [despesa_service_1.DespesasService,
        grupoDespesa_service_1.GrupoDespesaService])
], DespesaController);
exports.DespesaController = DespesaController;
//# sourceMappingURL=despesa.controller.js.map
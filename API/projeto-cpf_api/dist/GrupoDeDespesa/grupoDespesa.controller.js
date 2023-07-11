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
exports.GrupoDespesaController = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const grupoDespesa_dm_1 = require("./grupoDespesa.dm");
const grupoDespesa_entity_1 = require("./grupoDespesa.entity");
const inseriGrupoDespesa_dto_1 = require("./validacao/dto/inseriGrupoDespesa.dto");
const listarGrupoDespesa_dto_1 = require("./validacao/dto/listarGrupoDespesa.dto");
const uuid_1 = require("uuid");
let GrupoDespesaController = class GrupoDespesaController {
    constructor(armazenaGrupoDespesa) {
        this.armazenaGrupoDespesa = armazenaGrupoDespesa;
    }
    RetornoGrupoDespesa(grupoDespesa) {
        let listaGrupoDespesa = this.armazenaGrupoDespesa.GrupoDespesa;
        let retornoGrupoDespesa = listaGrupoDespesa.map(gDespesa => new listarGrupoDespesa_dto_1.ListarGrupoDespesasDTO(gDespesa.id, gDespesa.descricao));
        return retornoGrupoDespesa;
    }
    CriarGrupoDespesa(dadosGrupoDespesa) {
        const grupoDespesa = new grupoDespesa_entity_1.GrupoDespesaEntity((0, uuid_1.v4)(), dadosGrupoDespesa.descricao);
        this.armazenaGrupoDespesa.inserirGrupoDespesa(grupoDespesa);
        let retornoGrupoDespesa = {
            dadosGrupoDespesa,
            message: 'Grupo de Despesa Cadastrado.'
        };
        return retornoGrupoDespesa;
    }
};
__decorate([
    (0, decorators_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [grupoDespesa_entity_1.GrupoDespesaEntity]),
    __metadata("design:returntype", void 0)
], GrupoDespesaController.prototype, "RetornoGrupoDespesa", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inseriGrupoDespesa_dto_1.InserirGrupoDespesaDTO]),
    __metadata("design:returntype", void 0)
], GrupoDespesaController.prototype, "CriarGrupoDespesa", null);
GrupoDespesaController = __decorate([
    (0, decorators_1.Controller)('/grupoDespesa'),
    __metadata("design:paramtypes", [grupoDespesa_dm_1.ArmazenaGrupoDespesa])
], GrupoDespesaController);
exports.GrupoDespesaController = GrupoDespesaController;
//# sourceMappingURL=grupoDespesa.controller.js.map
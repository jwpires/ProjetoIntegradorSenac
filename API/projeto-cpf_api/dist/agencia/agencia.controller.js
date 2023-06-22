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
exports.AgenciaController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const agencia_dm_1 = require("./agencia.dm");
const agencia_entity_1 = require("./agencia.entity");
const inserirAgencia_dto_1 = require("./dto/inserirAgencia.dto");
const listarAgencia_dto_1 = require("./dto/listarAgencia.dto");
const uuid_1 = require("uuid");
let AgenciaController = class AgenciaController {
    constructor(armanezaAgencia) {
        this.armanezaAgencia = armanezaAgencia;
    }
    async RetornaTodasAgencias() {
        const consulta = this.armanezaAgencia.agencia;
        const retorno = consulta.map(agencia => new listarAgencia_dto_1.ListarAgencia(agencia.id, agencia.id_banco, agencia.nomeProprietario, agencia.numeroConta, agencia.tipoDeConta, agencia.saldo));
        return retorno;
    }
    async CriarAgencia(novaAgencia) {
        var agencia = new agencia_entity_1.AgenciaEntity((0, uuid_1.v4)(), novaAgencia.id_banco, novaAgencia.nomeProprietario, novaAgencia.numeroConta, novaAgencia.tipoDeConta, novaAgencia.saldo);
        this.armanezaAgencia.inserirAgencia(agencia);
        var retornoAgencia = {
            novaAgencia,
            status: 'Agencia InseridaS'
        };
        return retornoAgencia;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgenciaController.prototype, "RetornaTodasAgencias", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inserirAgencia_dto_1.InserirAgenciaDTO]),
    __metadata("design:returntype", Promise)
], AgenciaController.prototype, "CriarAgencia", null);
AgenciaController = __decorate([
    (0, common_1.Controller)('/agencia'),
    __metadata("design:paramtypes", [agencia_dm_1.AgenciaArmazenados])
], AgenciaController);
exports.AgenciaController = AgenciaController;
//# sourceMappingURL=agencia.controller.js.map
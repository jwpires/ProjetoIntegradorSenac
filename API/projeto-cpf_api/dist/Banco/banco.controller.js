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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const banco_entity_1 = require("./banco.entity");
const inserirBanco_dto_1 = require("./dto/inserirBanco.dto");
const uuid_1 = require("uuid");
const banco_service_1 = require("./banco.service");
let BancoController = class BancoController {
    constructor(bancoService) {
        this.bancoService = bancoService;
    }
    async RetornaTodosBancos() {
        return this.bancoService.listar();
    }
    async CriarBanco(novoBanco) {
        let banco = new banco_entity_1.Banco((0, uuid_1.v4)(), novoBanco.nome);
        this.bancoService.inserirBanco(banco);
        var retornoBanco = {
            novoBanco,
            status: 'Banco Inserido'
        };
        return retornoBanco;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], BancoController.prototype, "RetornaTodosBancos", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inserirBanco_dto_1.InserirBancoDTO]),
    __metadata("design:returntype", Promise)
], BancoController.prototype, "CriarBanco", null);
BancoController = __decorate([
    (0, common_1.Controller)('/bancos'),
    __metadata("design:paramtypes", [banco_service_1.BancoService])
], BancoController);
exports.BancoController = BancoController;
//# sourceMappingURL=banco.controller.js.map
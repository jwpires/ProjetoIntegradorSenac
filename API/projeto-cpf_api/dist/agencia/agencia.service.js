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
exports.AgenciaService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const agencia_entity_1 = require("./agencia.entity");
const uuid_1 = require("uuid");
const banco_service_1 = require("../Banco/banco.service");
let AgenciaService = class AgenciaService {
    constructor(agenciaRepository, bancoService) {
        this.agenciaRepository = agenciaRepository;
        this.bancoService = bancoService;
    }
    async listar() {
        return this.agenciaRepository.find();
    }
    async inserirAgencia(dados) {
        let agencia = new agencia_entity_1.Agencia();
        agencia.id = (0, uuid_1.v4)();
        agencia.id_banco = await this.bancoService.buscarBancoPorId(dados.id_banco);
        agencia.nomeProprietario = dados.nomeProprietario;
        agencia.numeroConta = dados.numeroConta;
        agencia.saldo = dados.saldo;
        agencia.tipoDeConta = dados.tipoConta;
        return this.agenciaRepository.save(agencia).
            then((result) => {
            return {
                id: agencia.id,
                descricao: agencia.numeroConta,
                message: "Despesa Cadastrada!"
            };
        })
            .catch((error) => {
            return {
                id: agencia.id,
                descricao: agencia.numeroConta,
                message: "Despesa Não Cadastrada devido ao erro: " + error
            };
        });
    }
};
AgenciaService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_1.Inject)('AGENCIA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        banco_service_1.BancoService])
], AgenciaService);
exports.AgenciaService = AgenciaService;
//# sourceMappingURL=agencia.service.js.map
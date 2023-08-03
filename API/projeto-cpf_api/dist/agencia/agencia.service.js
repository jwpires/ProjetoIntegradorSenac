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
let AgenciaService = class AgenciaService {
    constructor(agenciaRepository) {
        this.agenciaRepository = agenciaRepository;
    }
    async listar() {
        return this.agenciaRepository.find();
    }
    async inserirAgencia(agencia) {
        const id = agencia.id;
        const id_banco = agencia.id_banco;
        const nomeProprietario = agencia.nomeProprietario;
        const numeroConta = agencia.numeroConta;
        const saldo = agencia.saldo;
        const tipoDeConta = agencia.tipoDeConta;
        const novaAgencia = this.agenciaRepository.create({
            id,
            id_banco,
            nomeProprietario,
            numeroConta,
            tipoDeConta,
            saldo
        });
        try {
            const novaAgencia = this.agenciaRepository.create({
                id,
                id_banco,
                nomeProprietario,
                numeroConta,
                tipoDeConta,
                saldo
            });
            await this.agenciaRepository.insert(novaAgencia);
            console.log('Agencia cadastrado com sucesso.');
        }
        catch (error) {
            console.log('Erro ao cadastrar Agencia: ', error.message);
        }
    }
};
AgenciaService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_1.Inject)('AGENCIA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AgenciaService);
exports.AgenciaService = AgenciaService;
//# sourceMappingURL=agencia.service.js.map
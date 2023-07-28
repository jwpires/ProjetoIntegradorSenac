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
exports.BancoService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BancoService = class BancoService {
    constructor(bancoRepository) {
        this.bancoRepository = bancoRepository;
    }
    async listar() {
        return this.bancoRepository.find();
    }
    async inserirBanco(banco) {
        const id = banco.id;
        const nome = banco.nome;
        const novoBanco = this.bancoRepository.create({
            id,
            nome
        });
        await this.bancoRepository.insert(novoBanco);
    }
    buscaPorId(id) {
        return this.bancoRepository.findOne({
            where: {
                id,
            }
        });
    }
};
BancoService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_1.Inject)('BANCO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BancoService);
exports.BancoService = BancoService;
//# sourceMappingURL=banco.service.js.map
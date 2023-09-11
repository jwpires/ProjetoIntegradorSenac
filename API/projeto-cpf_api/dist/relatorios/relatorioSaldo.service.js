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
exports.RelatorioSaldoService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const listaSaldoDTO_1 = require("./dto/listaSaldoDTO");
let RelatorioSaldoService = class RelatorioSaldoService {
    constructor(relatorioSaldoDash) {
        this.relatorioSaldoDash = relatorioSaldoDash;
    }
    async listarRelatorioSaldo(BANCO, DESCRICAO) {
        if (BANCO !== undefined && DESCRICAO !== undefined) {
            var retornoQuery = (await this.relatorioSaldoDash
                .createQueryBuilder('agencia')
                .addSelect('agencia.ID', 'ID')
                .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                .addSelect('agencia.SALDO', 'SALDO')
                .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                .addSelect('b.NOME', 'BANCO')
                .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                .where('b.NOME = :banco', { banco: BANCO })
                .andWhere('agencia.NOMEPROPRIETARIO like :nome', { nome: `%${DESCRICAO}%` })
                .getRawMany());
        }
        else {
            if (BANCO !== undefined) {
                var retornoQuery = (await this.relatorioSaldoDash
                    .createQueryBuilder('agencia')
                    .addSelect('agencia.ID', 'ID')
                    .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                    .addSelect('agencia.SALDO', 'SALDO')
                    .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                    .addSelect('b.NOME', 'BANCO')
                    .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                    .where('b.NOME = :banco', { banco: BANCO })
                    .getRawMany());
            }
            else {
                if (DESCRICAO !== undefined) {
                    var retornoQuery = (await this.relatorioSaldoDash
                        .createQueryBuilder('agencia')
                        .addSelect('agencia.ID', 'ID')
                        .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                        .addSelect('agencia.SALDO', 'SALDO')
                        .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                        .addSelect('b.NOME', 'BANCO')
                        .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                        .where('agencia.NOMEPROPRIETARIO like :nome', { nome: `%${DESCRICAO}%` })
                        .getRawMany());
                }
                else {
                    var retornoQuery = (await this.relatorioSaldoDash
                        .createQueryBuilder('agencia')
                        .addSelect('agencia.ID', 'ID')
                        .addSelect('agencia.NOMEPROPRIETARIO', 'NOMEPROPRIETARIO')
                        .addSelect('agencia.SALDO', 'SALDO')
                        .addSelect('agencia.NUMEROCONTA', 'NUMEROCONTA')
                        .addSelect('b.NOME', 'BANCO')
                        .innerJoin('banco', 'b', 'b.ID = agencia.ID_BANCO')
                        .getRawMany());
                }
            }
        }
        let listaRetorno = retornoQuery.map(info => new listaSaldoDTO_1.ListarRelatorioSaldoDTO(info.ID, info.NOMEPROPRIETARIO, info.BANCO, info.NUMEROCONTA, info.SALDO));
        return listaRetorno;
    }
    buscarPorID(id) {
        return this.relatorioSaldoDash.findOne({
            where: {
                id,
            }
        });
    }
    async alterarSaldo(id, valor) {
        const agencia = await this.buscarPorID(id);
        let saldo = agencia.saldo;
        agencia.saldo = valor;
        return this.relatorioSaldoDash.save(agencia)
            .then((result) => {
            return {
                id: agencia.id,
                descricao: "Saldo alterado de " + saldo + " Para: " + agencia.saldo
            };
        })
            .catch((error) => {
            return {
                id: "",
                descricao: "Houve um erro ao alterar."
            };
        });
    }
};
RelatorioSaldoService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_1.Inject)('AGENCIA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RelatorioSaldoService);
exports.RelatorioSaldoService = RelatorioSaldoService;
//# sourceMappingURL=relatorioSaldo.service.js.map
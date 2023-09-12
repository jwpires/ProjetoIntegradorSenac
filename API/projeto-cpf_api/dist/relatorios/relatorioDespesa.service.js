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
exports.RelatorioDespesaService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const listarRelatorioDespesa_dto_1 = require("./dto/listarRelatorioDespesa.dto");
let RelatorioDespesaService = class RelatorioDespesaService {
    constructor(relatorioDespesaDash) {
        this.relatorioDespesaDash = relatorioDespesaDash;
    }
    async listar() {
        return this.relatorioDespesaDash.find();
    }
    async listarRelatorioDespesa(DATAINICIO, DATAFIM, TIPO, PAGO, GDESPESA, DESCRICAO) {
        if (DATAINICIO != "" && DATAFIM != "") {
            if (TIPO == 1) {
                if (GDESPESA != undefined && DESCRICAO != undefined) {
                    var retorno = await (this.relatorioDespesaDash
                        .createQueryBuilder('despesa')
                        .select('despesa.id', 'ID')
                        .addSelect('despesa.descricao', 'DESCRICAO')
                        .addSelect('gd.descricao', 'GRUPODESPESA')
                        .addSelect('despesa.datalancamento', 'DATALANC')
                        .addSelect('despesa.datavencimento', 'DATAVENC')
                        .addSelect('despesa.valor', 'VALOR')
                        .addSelect('despesa.pago', 'PAGO')
                        .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                        .where('despesa.datavencimento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                        .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                        .andWhere('gd.descricao = :nomeGDespesa', { nomeGDespesa: GDESPESA })
                        .andWhere('despesa.descricao like :nomeDespesa', { nomeDespesa: `%${DESCRICAO}%` })
                        .getRawMany());
                }
                else {
                    if (GDESPESA != undefined) {
                        var retorno = await (this.relatorioDespesaDash
                            .createQueryBuilder('despesa')
                            .select('despesa.id', 'ID')
                            .addSelect('despesa.descricao', 'DESCRICAO')
                            .addSelect('gd.descricao', 'GRUPODESPESA')
                            .addSelect('despesa.datalancamento', 'DATALANC')
                            .addSelect('despesa.datavencimento', 'DATAVENC')
                            .addSelect('despesa.valor', 'VALOR')
                            .addSelect('despesa.pago', 'PAGO')
                            .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                            .where('despesa.datavencimento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                            .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                            .andWhere('gd.descricao = :nomeGDespesa', { nomeGDespesa: GDESPESA })
                            .getRawMany());
                    }
                    else {
                        if (DESCRICAO != undefined) {
                            var retorno = await (this.relatorioDespesaDash
                                .createQueryBuilder('despesa')
                                .select('despesa.id', 'ID')
                                .addSelect('despesa.descricao', 'DESCRICAO')
                                .addSelect('gd.descricao', 'GRUPODESPESA')
                                .addSelect('despesa.datalancamento', 'DATALANC')
                                .addSelect('despesa.datavencimento', 'DATAVENC')
                                .addSelect('despesa.valor', 'VALOR')
                                .addSelect('despesa.pago', 'PAGO')
                                .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                                .where('despesa.datavencimento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                                .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                                .andWhere('despesa.descricao like :nomeDespesa', { nomeDespesa: `%${DESCRICAO}%` })
                                .getRawMany());
                        }
                        else {
                            var retorno = await (this.relatorioDespesaDash
                                .createQueryBuilder('despesa')
                                .select('despesa.id', 'ID')
                                .addSelect('despesa.descricao', 'DESCRICAO')
                                .addSelect('gd.descricao', 'GRUPODESPESA')
                                .addSelect('despesa.datalancamento', 'DATALANC')
                                .addSelect('despesa.datavencimento', 'DATAVENC')
                                .addSelect('despesa.valor', 'VALOR')
                                .addSelect('despesa.pago', 'PAGO')
                                .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                                .where('despesa.datavencimento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                                .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                                .getRawMany());
                        }
                    }
                }
            }
            else {
                if (GDESPESA != undefined && DESCRICAO != undefined) {
                    var retorno = await (this.relatorioDespesaDash
                        .createQueryBuilder('despesa')
                        .select('despesa.id', 'ID')
                        .addSelect('despesa.descricao', 'DESCRICAO')
                        .addSelect('gd.descricao', 'GRUPODESPESA')
                        .addSelect('despesa.datalancamento', 'DATALANC')
                        .addSelect('despesa.datavencimento', 'DATAVENC')
                        .addSelect('despesa.valor', 'VALOR')
                        .addSelect('despesa.pago', 'PAGO')
                        .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                        .where('despesa.datalancamento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                        .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                        .andWhere('gd.descricao = :nomeGDespesa', { nomeGDespesa: GDESPESA })
                        .andWhere('despesa.descricao like :nomeDespesa', { nomeDespesa: `%${DESCRICAO}%` })
                        .getRawMany());
                }
                else {
                    if (GDESPESA != undefined) {
                        var retorno = await (this.relatorioDespesaDash
                            .createQueryBuilder('despesa')
                            .select('despesa.id', 'ID')
                            .addSelect('despesa.descricao', 'DESCRICAO')
                            .addSelect('gd.descricao', 'GRUPODESPESA')
                            .addSelect('despesa.datalancamento', 'DATALANC')
                            .addSelect('despesa.datavencimento', 'DATAVENC')
                            .addSelect('despesa.valor', 'VALOR')
                            .addSelect('despesa.pago', 'PAGO')
                            .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                            .where('despesa.datalancamento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                            .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                            .andWhere('gd.descricao = :nomeGDespesa', { nomeGDespesa: GDESPESA })
                            .getRawMany());
                    }
                    else {
                        if (DESCRICAO != undefined) {
                            var retorno = await (this.relatorioDespesaDash
                                .createQueryBuilder('despesa')
                                .select('despesa.id', 'ID')
                                .addSelect('despesa.descricao', 'DESCRICAO')
                                .addSelect('gd.descricao', 'GRUPODESPESA')
                                .addSelect('despesa.datalancamento', 'DATALANC')
                                .addSelect('despesa.datavencimento', 'DATAVENC')
                                .addSelect('despesa.valor', 'VALOR')
                                .addSelect('despesa.pago', 'PAGO')
                                .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                                .where('despesa.datalancamento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                                .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                                .andWhere('despesa.descricao like :nomeDespesa', { nomeDespesa: `%${DESCRICAO}%` })
                                .getRawMany());
                        }
                        else {
                            var retorno = await (this.relatorioDespesaDash
                                .createQueryBuilder('despesa')
                                .select('despesa.id', 'ID')
                                .addSelect('despesa.descricao', 'DESCRICAO')
                                .addSelect('gd.descricao', 'GRUPODESPESA')
                                .addSelect('despesa.datalancamento', 'DATALANC')
                                .addSelect('despesa.datavencimento', 'DATAVENC')
                                .addSelect('despesa.valor', 'VALOR')
                                .addSelect('despesa.pago', 'PAGO')
                                .innerJoin('grupo_despesa', 'gd', 'gd.id = despesa.id_grupodespesa')
                                .where('despesa.datalancamento BETWEEN :datainicio AND :datafim AND despesa.pago = :pago_', { datainicio: DATAINICIO, datafim: DATAFIM })
                                .andWhere('despesa.pago = :pago_', { pago_: PAGO })
                                .getRawMany());
                        }
                    }
                }
            }
        }
        let listaRetorno = retorno.map(despesa => new listarRelatorioDespesa_dto_1.ListaRelatorioDespesaDTO(despesa.ID, despesa.DESCRICAO, despesa.GRUPODESPESA, despesa.DATALANC, despesa.DATAVENC, despesa.VALOR, despesa.PAGO));
        return listaRetorno;
    }
    buscarPorID(id) {
        return this.relatorioDespesaDash.findOne({
            where: {
                id,
            }
        });
    }
    async alterarStatusPagametoDespesa(id) {
        const despesa = await this.buscarPorID(id);
        despesa.pago == true ? despesa.pago = false : despesa.pago = true;
        return this.relatorioDespesaDash.save(despesa)
            .then((result) => {
            return {
                id: despesa.id,
                descricao: "Despesa alterada!"
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
RelatorioDespesaService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_1.Inject)('DESPESA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RelatorioDespesaService);
exports.RelatorioDespesaService = RelatorioDespesaService;
//# sourceMappingURL=relatorioDespesa.service.js.map
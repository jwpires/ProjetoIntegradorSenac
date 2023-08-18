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
let RelatorioDespesaService = class RelatorioDespesaService {
    constructor(relatorioDespesaDash) {
        this.relatorioDespesaDash = relatorioDespesaDash;
    }
    async listar() {
        return this.relatorioDespesaDash.find();
    }
    async listaComFiltro(NOME_MARCA) {
        if (NOME_MARCA != undefined) {
            var retorno = await (this.relatorioDespesaDash
                .createQueryBuilder('despesa')
                .select('despesa.id', 'ID')
                .addSelect('despesa.descricao', 'descricao')
                .addSelect('pes_f.nome', 'nome_fornecedor')
                .leftJoin('for_marca', 'fm', 'fm.idmarca = marca.id')
                .leftJoin('fornecedor', 'for', 'for.id = fm.idfornecedor')
                .leftJoin('pessoa', 'pes_f', 'for.idpessoa = pes_f.id')
                .where('marca.nome like :nomemarca', { nomemarca: `%${NOME_MARCA}%` })
                .getRawMany());
        }
        else {
            var retorno = await (this.marcaRepository
                .createQueryBuilder('marca')
                .select('marca.id', 'ID')
                .addSelect('marca.nome', 'nome_marca')
                .addSelect('pes_f.nome', 'nome_fornecedor')
                .leftJoin('for_marca', 'fm', 'fm.idmarca = marca.id')
                .leftJoin('fornecedor', 'for', 'for.id = fm.idfornecedor')
                .leftJoin('pessoa', 'pes_f', 'for.idpessoa = pes_f.id')
                .getRawMany());
        }
        const listaRetorno = retorno.map(marca => new listaMarcaFornDTO(marca.ID, marca.nome_marca, marca.nome_fornecedor));
        return listaRetorno;
    }
};
RelatorioDespesaService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_1.Inject)('DESPESA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RelatorioDespesaService);
exports.RelatorioDespesaService = RelatorioDespesaService;
//# sourceMappingURL=relatorioDespesa.service.js.map
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
exports.DespesasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let DespesasService = class DespesasService {
    constructor(despesaRepository) {
        this.despesaRepository = despesaRepository;
    }
    async listar() {
        return this.despesaRepository.find();
    }
    async inserirDespesa(despesa) {
        const id = despesa.id;
        const descricao = despesa.descricao;
        const id_grupoDespesa = despesa.id_grupoDespesa;
        const dataLancamento = despesa.dataLancamento;
        const dataVencimento = despesa.dataVencimento;
        const valor = despesa.valor;
        const pago = despesa.pago;
        try {
            const novaDespesa = this.despesaRepository.create({
                id,
                descricao,
                id_grupoDespesa,
                dataLancamento,
                dataVencimento,
                valor,
                pago
            });
            await this.despesaRepository.insert(novaDespesa);
            console.log('Despesas cadastrada com sucesso.');
        }
        catch (error) {
            console.log('Erro ao cadastrar Despesa' + error.message);
        }
    }
};
DespesasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DESPESA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DespesasService);
exports.DespesasService = DespesasService;
//# sourceMappingURL=despesa.service.js.map
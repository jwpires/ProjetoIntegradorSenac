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
const despesa_entity_1 = require("./despesa.entity");
const grupoDespesa_service_1 = require("../GrupoDeDespesa/grupoDespesa.service");
const uuid_1 = require("uuid");
let DespesasService = class DespesasService {
    constructor(despesaRepository, grupoDespesaRepository, grupoDespesaService) {
        this.despesaRepository = despesaRepository;
        this.grupoDespesaRepository = grupoDespesaRepository;
        this.grupoDespesaService = grupoDespesaService;
    }
    async listar() {
        return this.despesaRepository.find();
    }
    async inserirDespesa(dados) {
        let despesa = new despesa_entity_1.Despesa();
        despesa.id = (0, uuid_1.v4)();
        despesa.descricao = dados.descricao;
        despesa.grupoDespesa = await this.grupoDespesaService.buscarGrupoDespesaPorId(dados.id_GrupoDespesa);
        despesa.dataLancamento = dados.dataLancamento;
        despesa.dataVencimento = dados.dataVencimento;
        despesa.valor = dados.valor;
        despesa.pago = dados.pago;
        let teste = despesa;
        return this.despesaRepository.save(despesa).
            then((result) => {
            return {
                id: despesa.id,
                descricao: despesa.descricao,
                valor: despesa.valor,
                message: "Despesa Cadastrada!"
            };
        })
            .catch((error) => {
            return {
                id: despesa.id,
                descricao: despesa.descricao,
                message: "Despesa Não Cadastrada devido ao erro: " + error
            };
        });
    }
};
DespesasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DESPESA_REPOSITORY')),
    __param(1, (0, common_1.Inject)('GRUPODESPESA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        grupoDespesa_service_1.GrupoDespesaService])
], DespesasService);
exports.DespesasService = DespesasService;
//# sourceMappingURL=despesa.service.js.map
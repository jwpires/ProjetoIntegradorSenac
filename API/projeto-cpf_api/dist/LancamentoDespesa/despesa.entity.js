"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaEntity = void 0;
class DespesaEntity {
    constructor(id, descricao, grupoDespesa, dataLancamento, dataVencimento, valor, pago) {
        this.id = id;
        this.descricao = descricao;
        this.grupoDespesa = grupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
        this.pago = pago;
    }
}
exports.DespesaEntity = DespesaEntity;
//# sourceMappingURL=despesa.entity.js.map
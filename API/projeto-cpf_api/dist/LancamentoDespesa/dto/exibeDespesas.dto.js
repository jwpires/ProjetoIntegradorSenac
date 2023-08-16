"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarDespesasDTO = void 0;
class ListarDespesasDTO {
    constructor(id, descricao, id_grupoDespesa, dataLancamento, dataVencimento, valor, pago) {
        this.id = id;
        this.descricao = descricao;
        this.id_grupoDespesa = id_grupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
        this.pago = pago;
    }
}
exports.ListarDespesasDTO = ListarDespesasDTO;
//# sourceMappingURL=exibeDespesas.dto.js.map
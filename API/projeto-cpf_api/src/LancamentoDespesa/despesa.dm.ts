import { Injectable } from "@nestjs/common";
import { Despesa } from "./despesa.entity";

@Injectable()
export class DespesasArmazenadas{
    #despesas: Despesa[] = [];
    
    get Despesa() {
        return this.#despesas;
    }

    inserirDespesa(despesa: Despesa) {
        this.#despesas.push(despesa);
    }

    exibeDespesasDashboard() {
        const despesas = this.Despesa;
        return despesas;
    }
}
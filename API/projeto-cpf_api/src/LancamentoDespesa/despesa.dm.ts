import { Injectable } from "@nestjs/common";
import { DespesaEntity } from "./despesa.entity";

@Injectable()
export class DespesasArmazenadas{
    #despesas: DespesaEntity[] = [];
    
    get Despesa() {
        return this.#despesas;
    }

    inserirDespesa(despesa: DespesaEntity) {
        this.#despesas.push(despesa);
    }

    exibeDespesasDashboard() {
        const despesas = this.Despesa;
        return despesas;
    }
}
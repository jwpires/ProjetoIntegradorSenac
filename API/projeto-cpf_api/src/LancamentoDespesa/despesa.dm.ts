import { Injectable } from "@nestjs/common";
import { DespesaEntity } from "./despesa.entity";

@Injectable()
export class DespesasArmazenadas{
<<<<<<< HEAD
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
=======
    #despesas : DespesaEntity[];
>>>>>>> 09402edd8a19c6c5309fa8db0f3f5617d4c40984
}
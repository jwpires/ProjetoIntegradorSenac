import { Injectable } from "@nestjs/common";
import { DespesaEntity } from "src/LancamentoDespesa/despesa.entity";
import { RelatorioDespesaEntity } from "./relatorioDespesa.entity";

@Injectable()
export class RelatorioDespesa{
    #relatorio: RelatorioDespesaEntity[] = []
    
    get Despesas() {
        return this.#relatorio;
    }

    exibeTodasDespesas() {
        return this.Despesas;
    }

}
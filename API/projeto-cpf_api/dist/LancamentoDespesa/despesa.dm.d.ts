import { Despesa } from "./despesa.entity";
export declare class DespesasArmazenadas {
    #private;
    get Despesa(): Despesa[];
    inserirDespesa(despesa: Despesa): void;
    exibeDespesasDashboard(): Despesa[];
}

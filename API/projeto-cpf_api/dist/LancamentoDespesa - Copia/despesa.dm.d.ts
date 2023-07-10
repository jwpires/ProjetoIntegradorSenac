import { DespesaEntity } from "./despesa.entity";
export declare class DespesasArmazenadas {
    #private;
    get Despesa(): DespesaEntity[];
    inserirDespesa(despesa: DespesaEntity): void;
    exibeDespesasDashboard(): DespesaEntity[];
}

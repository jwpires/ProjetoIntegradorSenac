import { GrupoDespesaEntity } from "./grupoDespesa.entity";
export declare class ArmazenaGrupoDespesa {
    #private;
    get GrupoDespesa(): GrupoDespesaEntity[];
    inserirGrupoDespesa(grupoDespesa_: GrupoDespesaEntity): void;
    exibeGrupoDespesa(): GrupoDespesaEntity[];
}

import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
export declare class Despesa {
    id: string;
    descricao: string;
    id_grupoDespesa: GrupoDespesa;
    dataLancamento: Date;
    dataVencimento: Date;
    valor: number;
    pago: boolean;
    constructor(id: string, descricao: string, id_grupoDespesa: GrupoDespesa, dataLancamento: Date, dataVencimento: Date, valor: number, pago: boolean);
}

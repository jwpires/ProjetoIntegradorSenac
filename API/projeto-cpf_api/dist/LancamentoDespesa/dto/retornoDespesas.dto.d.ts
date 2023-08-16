import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
export declare class RetornoDespesasDTO {
    readonly id: string;
    readonly descricao: string;
    readonly id_grupoDespesa: GrupoDespesa;
    readonly dataLancamento: Date;
    readonly dataVencimento: Date;
    readonly valor: number;
    readonly pago: boolean;
    constructor(id: string, descricao: string, id_grupoDespesa: GrupoDespesa, dataLancamento: Date, dataVencimento: Date, valor: number, pago: boolean);
}

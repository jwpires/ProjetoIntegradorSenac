import { GrupoDespesa } from "src/GrupoDeDespesa/grupoDespesa.entity";
export declare class Despesa {
    id: string;
    descricao: string;
    grupoDespesa: GrupoDespesa;
    dataLancamento: Date;
    dataVencimento: Date;
    valor: number;
    pago: boolean;
}

export declare class Despesa {
    id: string;
    descricao: string;
    id_grupoDespesa: string;
    dataLancamento: Date;
    dataVencimento: Date;
    valor: number;
    pago: boolean;
    constructor(id: string, descricao: string, id_grupoDespesa: string, dataLancamento: Date, dataVencimento: Date, valor: number, pago: boolean);
}

export declare class DespesaEntity {
    id: string;
    descricao: string;
    grupoDespesa: string;
    dataLancamento: Date;
    dataVencimento: Date;
    valor: number;
    constructor(id: string, descricao: string, grupoDespesa: string, dataLancamento: Date, dataVencimento: Date, valor: number);
}

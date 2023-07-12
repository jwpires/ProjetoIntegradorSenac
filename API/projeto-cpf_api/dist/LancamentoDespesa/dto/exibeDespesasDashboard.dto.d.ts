export declare class ListarDespesasDashboardDTO {
    readonly descricao: string;
    readonly grupoDespesa: string;
    readonly dataVencimento: Date;
    readonly valor: number;
    readonly pago: boolean;
    constructor(descricao: string, grupoDespesa: string, dataVencimento: Date, valor: number, pago: boolean);
}

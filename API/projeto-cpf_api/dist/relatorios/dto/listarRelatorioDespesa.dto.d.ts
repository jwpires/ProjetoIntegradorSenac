export declare class ListaRelatorioDespesaDTO {
    readonly dataLancamento: Date;
    readonly dataVencimento: Date;
    readonly nomeGrupoDespesa: string;
    readonly valor: number;
    constructor(dataLancamento: Date, dataVencimento: Date, nomeGrupoDespesa: string, valor: number);
}

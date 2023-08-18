export declare class ListaRelatorioDespesaDTO {
    readonly id_despesa: string;
    readonly descricao: string;
    readonly nomeGrupoDespesa: string;
    readonly dataLancamento: Date;
    readonly dataVencimento: Date;
    readonly valor: number;
    constructor(id_despesa: string, descricao: string, nomeGrupoDespesa: string, dataLancamento: Date, dataVencimento: Date, valor: number);
}

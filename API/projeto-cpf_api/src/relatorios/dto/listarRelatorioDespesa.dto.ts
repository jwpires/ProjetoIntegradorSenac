
export class ListaRelatorioDespesaDTO{
    constructor(
        readonly dataLancamento: Date,
        readonly dataVencimento: Date,
        readonly nomeGrupoDespesa: string,
        readonly valor: number
    ){}
}
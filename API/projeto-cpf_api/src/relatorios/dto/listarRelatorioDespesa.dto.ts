
export class ListaRelatorioDespesaDTO{
    constructor(
        readonly id_despesa: string,
        readonly descricao: string,
        readonly nomeGrupoDespesa: string,
        readonly dataLancamento: Date,
        readonly dataVencimento: Date,
        readonly valor: number
    ){}
}


export class ListarDespesasDashboardDTO{
    constructor(
        readonly descricao:string,
        readonly grupoDespesa:string,
        readonly dataVencimento:Date,
        readonly valor: number
    ){}
}
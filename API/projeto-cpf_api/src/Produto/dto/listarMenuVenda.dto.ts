
export class ListarMenuVendaDTO{
    constructor(
        readonly nome: string,
        readonly medida: string[],
        readonly estoque: number,
        readonly cor: string[],
        readonly marca: string,
        readonly valor: number
    ){}
}
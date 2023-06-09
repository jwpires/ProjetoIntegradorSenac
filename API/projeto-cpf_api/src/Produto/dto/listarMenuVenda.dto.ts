
export class ListarMenuVendaDTO{
    constructor(
        readonly nome: string,
        readonly medida: string[],
        readonly cor: string[],
        readonly marca: string,
        readonly valor: number
    ){}
}
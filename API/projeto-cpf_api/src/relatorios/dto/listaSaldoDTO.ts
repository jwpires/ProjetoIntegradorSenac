
export class ListarRelatorioSaldoDTO{
    constructor(
        readonly id: string,
        readonly nomeProprietario: string,
        readonly banco: string,
        readonly numeroConta: string,
        readonly saldo: number
    ){}
}
export declare class ListarRelatorioSaldoDTO {
    readonly id: string;
    readonly nomeProprietario: string;
    readonly banco: string;
    readonly numeroConta: string;
    readonly saldo: number;
    constructor(id: string, nomeProprietario: string, banco: string, numeroConta: string, saldo: number);
}

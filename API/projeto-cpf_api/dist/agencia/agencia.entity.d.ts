export declare class AgenciaEntity {
    #private;
    id: string;
    id_banco: string;
    nomeProprietario: string;
    numeroConta: string;
    tipoDeConta: string;
    constructor(id: string, id_banco: string, nomeProprietario: string, numeroConta: string, tipoDeConta: string, saldo: number);
    set deposito(valor: number);
    set saque(valor: number);
    get saldo(): number;
}

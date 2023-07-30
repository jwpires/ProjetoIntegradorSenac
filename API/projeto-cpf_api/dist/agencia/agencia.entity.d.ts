import { Banco } from "src/Banco/banco.entity";
export declare class Agencia {
    id: string;
    id_banco: Banco;
    nomeProprietario: string;
    numeroConta: string;
    tipoDeConta: string;
    saldo: number;
    constructor(id: string, id_banco: Banco, nomeProprietario: string, numeroConta: string, tipoDeConta: string, saldo: number);
}

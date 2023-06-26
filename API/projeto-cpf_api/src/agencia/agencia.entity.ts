export class AgenciaEntity{
    id                  :   string;
    id_banco            :   string;
    nomeProprietario    :   string;
    numeroConta         :   string;
    tipoDeConta         :   string;
    saldo               :   number; 

    constructor(
        id: string,
        id_banco: string,
        nomeProprietario: string,
        numeroConta: string,
        tipoDeConta: string,
        saldo: number
    )
    {
        this.id     =   id;
        this.id_banco     =   id_banco;
        this.nomeProprietario   =   nomeProprietario;
        this.numeroConta = numeroConta;
        this.tipoDeConta = tipoDeConta;
        this.saldo = saldo;
    }
    

}
export class AgenciaEntity{
    id                  :   string;
    id_banco            :   string;
    nomeProprietario    :   string;
    numeroConta         :   string;
    tipoDeConta         :   string;
    #saldo               :   number; 

    constructor(id: string, id_banco: string, nomeProprietario: string, numeroConta: string, tipoDeConta: string, saldo: number){
        this.id     =   id;
        this.nomeProprietario   =   nomeProprietario;
        this.numeroConta = numeroConta;
        this.tipoDeConta = tipoDeConta;
        this.#saldo = saldo;
    }

    
    set deposito(valor : number) {
        this.#saldo += valor;
    }

    set saque(valor : number) {
        this.#saldo -= valor;
    }

    get saldo() {
        return this.#saldo;
    }
    

}
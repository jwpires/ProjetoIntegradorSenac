export class ListarAgenciaDTO{
    constructor( 
    readonly id                  :   string,
    readonly id_banco            :   string,
    readonly nomeProprietario    :   string,
    readonly numeroConta         :   string,
    readonly tipoDeConta         :   string,
    readonly saldo               :   number
    ){};
}
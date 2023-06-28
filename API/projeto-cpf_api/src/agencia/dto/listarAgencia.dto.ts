export class ListarAgenciaDTO{
    constructor( 
    readonly id                  :   string,
    readonly id_banco            :   string,
    readonly nomeProprietario    :   string,
    readonly numeroConta         :   string,
    readonly tipoConta           :   string,
    readonly saldo               :   number
    ){};
}
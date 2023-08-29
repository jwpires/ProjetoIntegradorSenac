export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly idade: bigint,
        readonly cidade: string,
        readonly email: string,
        readonly telefone: string

    ){}
}
export declare class UsuarioEntity {
    #private;
    id: string;
    nome: String;
    idade: BigInteger;
    cidade: String;
    email: String;
    telefone: String;
    constructor(nome: String, idade: BigInteger, cidade: String, email: String, telefone: String, senha: String);
    get senha(): string;
    set senha(senhaNova: string);
}

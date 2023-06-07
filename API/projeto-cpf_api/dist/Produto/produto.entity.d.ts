export declare class ProdutoEntity {
    id: string;
    nome: string;
    ativo: boolean;
    estoque: BigInteger;
    medidas: string[];
    cor: string[];
    marca: string;
    constructor(id: string, nome: string, ativo: boolean, estoque: BigInteger, medidas: string[], cor: string[], marca: string);
}

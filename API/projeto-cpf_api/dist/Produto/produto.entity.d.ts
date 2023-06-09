export declare class ProdutoEntity {
    id: string;
    nome: string;
    ativo: boolean;
    valor: number;
    estoque: number;
    medida: string[];
    cor: string[];
    marca: string;
    constructor(id: string, nome: string, ativo: boolean, valor: number, estoque: number, medida: string[], cor: string[], marca: string);
}

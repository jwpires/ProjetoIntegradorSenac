

export class ProdutoEntity{
    id      :   string;
    nome    :   string;
    ativo   :   boolean;
    valor   :   number;
    estoque :   number;
    medida :   string[];
    cor     :   string[];
    marca   :   string;

    constructor(
        id:string,
        nome:string,
        ativo: boolean,
        valor: number,
        estoque:number,
        medida:string[],
        cor:string[],
        marca:string
    )
    {
        this.id     = id;
        this.nome   = nome;
        this.ativo = ativo;
        this.valor = valor;
        this.estoque= estoque;
        this.medida= medida;
        this.cor    = cor;
        this.marca = marca;

    }


}
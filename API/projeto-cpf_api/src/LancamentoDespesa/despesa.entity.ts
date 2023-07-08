export class DespesaEntity{
    id: string;
    descricao:string;
    grupoDespesa:string;
    dataLancamento:Date;
    dataVencimento:Date;
    valor: number;

    constructor(
        id:string,
        descricao:string,
        grupoDespesa:string,
        dataLancamento:Date,
        dataVencimento:Date,
        valor: number
    )
    {
        this.id = id;
        this.descricao = descricao;
        this.grupoDespesa = grupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
    }

}
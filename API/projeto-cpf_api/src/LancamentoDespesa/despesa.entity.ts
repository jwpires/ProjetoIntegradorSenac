export class DespesaEntity{

    descricao:string;
    grupoDespesa:string;
    dataLancamento:Date;
    dataVencimento:Date;
    valor: number;

    constructor(
        descricao:string,
        grupoDespesa:string,
        dataLancamento:Date,
        dataVencimento:Date,
        valor: number
    )
    {
        this.descricao = descricao;
        this.grupoDespesa = grupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
    }

}
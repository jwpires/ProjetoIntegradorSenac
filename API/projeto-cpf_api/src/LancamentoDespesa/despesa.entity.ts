

export class DespesaEntity{
    id: string;
    descricao:string;
    grupoDespesa:string;
    dataLancamento:Date;
    dataVencimento:Date;
    valor: number;
    pago: boolean;

    constructor(
        id:string,
        descricao:string,
        grupoDespesa:string,
        dataLancamento:Date,
        dataVencimento:Date,
        valor: number,
        pago: boolean
    )
    {
        this.id = id;
        this.descricao = descricao;
        this.grupoDespesa = grupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
        this.pago = pago;
    }

}
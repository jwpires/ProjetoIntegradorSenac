
export class RelatorioDespesaEntity{
    dataLancamento: Date;
    dataVencimento: Date;
    nomeGrupoDespesa: string;
    valor: number;

    constructor(
        dataLancamento: Date,
        dataVencimento: Date,
        nomeGrupoDespesa: string,
        valor: number
    )
    {
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.nomeGrupoDespesa = nomeGrupoDespesa;
        this.valor = valor;
    }
}
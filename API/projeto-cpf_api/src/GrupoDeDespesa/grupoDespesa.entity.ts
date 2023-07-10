export class GrupoDespesaEntity{
    id: string;
    descricao: string;
    idGrupoDespesa: string;
    dataLancamento: Date;
    dataVencimento:Date;
    valor: number;

    constructor(
        id: string,
        descricao: string,
        idGrupoDespesa: string,
        dataLancamento: Date,
        dataVencimento:Date,
        valor: number)
    {
        this.id = id;
        this.descricao = descricao;
        this.idGrupoDespesa = idGrupoDespesa;
        this.dataLancamento = dataLancamento;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
    }
}